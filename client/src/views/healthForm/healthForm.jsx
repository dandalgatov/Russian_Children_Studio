import React from 'react'
import { Row, Col, Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'


export default function healthForm() {

    // const Demo = () => {
    //     const onFinish = values => {
    //         console.log('Received values of form:', values);
    //     };
    // }
        
        return (
            <div>
                <Row gutter={[16, 16]}>
                    <Col span={16}>
                    
                    </Col>
                    <Col span={8}>
                        <Form name="dynamic_form_nest_item"  autoComplete="off">
                            <Form.List name="users">
                                {(fields, { add, remove }) => {
                                    return (
                                        <div>
                                            {fields.map(field => (
                                                <Space key={field.key} style={{ display: 'flex', marginBottom: 8 }} align="start">
                                                    <Form.Item
                                                        {...field}
                                                        name={[field.name, 'first']}
                                                        fieldKey={[field.fieldKey, 'first']}
                                                        rules={[{ required: true, message: 'Missing first name' }]}
                                                    >
                                                        <Input placeholder="First Name" />
                                                    </Form.Item>
                                                    <Form.Item
                                                        {...field}
                                                        name={[field.name, 'last']}
                                                        fieldKey={[field.fieldKey, 'last']}
                                                        rules={[{ required: true, message: 'Missing last name' }]}
                                                    >
                                                        <Input placeholder="Last Name" />
                                                    </Form.Item>

                                                    <MinusCircleOutlined
                                                        onClick={() => {
                                                            remove(field.name);
                                                        }}
                                                    />
                                                </Space>
                                            ))}

                                            <Form.Item>
                                                <Button
                                                    type="dashed"
                                                    onClick={() => {
                                                        add();
                                                    }}
                                                    block
                                                >
                                                    <PlusOutlined /> Add Visitor
                </Button>
                                            </Form.Item>
                                        </div>
                                    );
                                }}
                            </Form.List>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
        </Button>
                            </Form.Item>
                        </Form>

                    </Col>
                </Row>
            </div>
        )
    
}

