import { Button, message, Steps, Col, Row } from 'antd';
import React, { useState } from 'react';
import Upload from './Upload';
import Select from './Select';
import Preview from './Preview';

const { Step } = Steps;

const steps = [
    {
        title: 'Upload',
        subTitle:'Theme or Plugin',
        content: <Upload />,
    },
    {
        title: 'Select WordPress',
        subTitle:'Version',
        content: <Select />,
    },
    {
        title: 'Deploy',
        subTitle:'& Preview',
        content: <Preview />,
    },
];

export default function Sandbox() {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <>
            <Steps current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} subTitle={item.subTitle}/>
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};

