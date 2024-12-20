import {Button} from '@/components/ui/button';
import {memo} from 'react';
import {Handle, NodeProps, Position} from 'reactflow';
import {twMerge} from 'tailwind-merge';

import styles from '../styles/WorkflowNode.module.css';

const ReadOnlyNode = ({data}: NodeProps) => (
    <div className="relative flex cursor-grab items-center justify-center">
        <Button className="size-16 cursor-grab rounded-md border-2 border-gray-300 bg-white p-4 shadow hover:bg-white">
            {data.icon}
        </Button>

        <div className="ml-2 flex w-full min-w-max flex-col items-start">
            <span className="font-semibold">{data.title || data.label}</span>

            {data.operationName && <pre className="text-sm">{data.operationName}</pre>}

            <span className="text-sm text-gray-500">{data.trigger ? 'trigger_1' : data.name}</span>
        </div>

        <Handle
            className={twMerge('left-node-handle-placement', styles.handle)}
            isConnectable={false}
            position={Position.Top}
            type="target"
        />

        <Handle
            className={twMerge('left-node-handle-placement', styles.handle)}
            isConnectable={false}
            position={Position.Bottom}
            type="source"
        />
    </div>
);

export default memo(ReadOnlyNode);
