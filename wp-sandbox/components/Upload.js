import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, Typography, Radio } from 'antd';
import { useState } from 'react';

const { Text } = Typography

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },

    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }

        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const fileType = [
    {
        label: 'Theme',
        value: 'theme',
    },
    {
        label: 'Plugin',
        value: 'plugin',
    }
];



export default function UploadComponent() {

    const [fileTypeValue, setFileTypeValue ] = useState('theme')

    const onTypeChange = ({target: {value}}) => {
        setFileTypeValue(value)
    }
    return (<>
        <Text style={{ display: 'block', paddingBottom: 15 }}>Upload file in zip format</Text>

        <Radio.Group
            options={fileType}
            onChange={onTypeChange}
            value={fileTypeValue}
            optionType="button"
            buttonStyle="solid"
        />
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
    </>);
}

