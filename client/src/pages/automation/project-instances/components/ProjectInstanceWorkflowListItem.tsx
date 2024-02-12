import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import {Tooltip, TooltipContent, TooltipTrigger} from '@/components/ui/tooltip';
import {useToast} from '@/components/ui/use-toast';
import {ProjectInstanceApi, ProjectInstanceWorkflowModel, WorkflowModel} from '@/middleware/automation/configuration';
import {ComponentDefinitionBasicModel} from '@/middleware/platform/configuration';
import {useEnableProjectInstanceWorkflowMutation} from '@/mutations/automation/projectInstanceWorkflows.mutations';
import ProjectInstanceEditWorkflowDialog from '@/pages/automation/project-instances/components/ProjectInstanceEditWorkflowDialog';
import {ProjectInstanceKeys} from '@/queries/automation/projectInstances.queries';
import {DotsVerticalIcon} from '@radix-ui/react-icons';
import {useQueryClient} from '@tanstack/react-query';
import {CalendarIcon, PlayIcon} from 'lucide-react';
import {useState} from 'react';
import InlineSVG from 'react-inlinesvg';
import {Link} from 'react-router-dom';
import {twMerge} from 'tailwind-merge';

const projectInstanceApi = new ProjectInstanceApi();

const ProjectInstanceWorkflowListItem = ({
    filteredDefinitionNames,
    projectId,
    projectInstanceEnabled,
    projectInstanceId,
    projectInstanceWorkflow,
    workflow,
    workflowComponentDefinitions,
    workflowTaskDispatcherDefinitions,
}: {
    filteredDefinitionNames?: string[];
    projectId: number;
    projectInstanceEnabled: boolean;
    projectInstanceId: number;
    projectInstanceWorkflow: ProjectInstanceWorkflowModel;
    workflow: WorkflowModel;
    workflowComponentDefinitions: {
        [key: string]: ComponentDefinitionBasicModel | undefined;
    };
    workflowTaskDispatcherDefinitions: {
        [key: string]: ComponentDefinitionBasicModel | undefined;
    };
}) => {
    const [showEditWorkflowDialog, setShowEditWorkflowDialog] = useState(false);

    const {toast} = useToast();

    const workflowHasManualTrigger = !workflow.triggers || workflow.triggers?.length === 0;

    const queryClient = useQueryClient();

    const enableProjectInstanceWorkflowMutation = useEnableProjectInstanceWorkflowMutation({
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ProjectInstanceKeys.projectInstances,
            });
        },
    });

    const handleProjectInstanceEnable = () => {
        enableProjectInstanceWorkflowMutation.mutate(
            {
                enable: !projectInstanceWorkflow.enabled,
                id: projectInstanceId,
                workflowId: workflow.id!,
            },
            {
                onSuccess: () => {
                    projectInstanceWorkflow = {
                        ...projectInstanceWorkflow,
                        enabled: !projectInstanceWorkflow?.enabled,
                    };
                },
            }
        );
    };

    const handleWorkflowRun = () => {
        projectInstanceApi
            .createProjectInstanceWorkflowJob({
                id: projectInstanceId,
                workflowId: workflow.id!,
            })
            .then(() => {
                toast({
                    description: 'Workflow request sent.',
                });
            });
    };

    return (
        <>
            <Link
                className="flex flex-1 items-center"
                to={`/automation/projects/${projectId}/workflows/${workflow.id}`}
            >
                <div
                    className={twMerge(
                        'w-80 text-sm font-semibold',
                        !projectInstanceWorkflow.enabled && 'text-muted-foreground'
                    )}
                >
                    {workflow.label}
                </div>

                <div className="ml-6 flex">
                    {filteredDefinitionNames?.map((name) => {
                        const componentDefinition = workflowComponentDefinitions[name];
                        const taskDispatcherDefinition = workflowTaskDispatcherDefinitions[name];

                        return (
                            <div className="mr-0.5 flex items-center justify-center rounded-full border p-1" key={name}>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <InlineSVG
                                            className="size-5 flex-none"
                                            key={name}
                                            src={
                                                componentDefinition?.icon
                                                    ? componentDefinition?.icon
                                                    : taskDispatcherDefinition?.icon ?? ''
                                            }
                                        />
                                    </TooltipTrigger>

                                    <TooltipContent side="right">{componentDefinition?.title}</TooltipContent>
                                </Tooltip>
                            </div>
                        );
                    })}
                </div>
            </Link>

            <div className="flex items-center justify-end gap-x-6">
                {projectInstanceWorkflow?.lastExecutionDate ? (
                    <Tooltip>
                        <TooltipTrigger className="flex items-center text-sm text-gray-500">
                            <span>
                                {`Executed at ${projectInstanceWorkflow.lastExecutionDate?.toLocaleDateString()} ${projectInstanceWorkflow.lastExecutionDate?.toLocaleTimeString()}`}
                            </span>
                        </TooltipTrigger>

                        <TooltipContent>Last Execution Date</TooltipContent>
                    </Tooltip>
                ) : (
                    '-'
                )}

                {projectInstanceWorkflow && (
                    <div className="w-8">
                        {workflowHasManualTrigger && (
                            <Button
                                disabled={!projectInstanceEnabled || !projectInstanceWorkflow.enabled}
                                onClick={() => handleWorkflowRun()}
                                size="icon"
                                variant="ghost"
                            >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <PlayIcon className="h-5 text-success" />
                                    </TooltipTrigger>

                                    <TooltipContent>Run workflow manually</TooltipContent>
                                </Tooltip>
                            </Button>
                        )}
                    </div>
                )}

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                            <DotsVerticalIcon className="size-4 hover:cursor-pointer" />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            disabled={projectInstanceEnabled}
                            onClick={() => setShowEditWorkflowDialog(true)}
                        >
                            Edit
                        </DropdownMenuItem>

                        <DropdownMenuItem
                            disabled={projectInstanceEnabled}
                            onClick={() => handleProjectInstanceEnable()}
                        >
                            {projectInstanceWorkflow.enabled ? 'Disable' : 'Enable'}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {showEditWorkflowDialog && projectInstanceWorkflow && (
                <ProjectInstanceEditWorkflowDialog
                    onClose={() => setShowEditWorkflowDialog(false)}
                    projectInstanceEnabled={projectInstanceEnabled}
                    projectInstanceWorkflow={projectInstanceWorkflow}
                    workflow={workflow}
                />
            )}
        </>
    );
};

export default ProjectInstanceWorkflowListItem;
