import { Button, Col, Form, Input, Modal, Row, message } from 'antd'
import React, { useState } from 'react'
import { useResetPasswordMutation } from '../../../../store/apis/user';
import '../../authentication.scss'

const ResetPasswordModal = ({ setIsResetPasswordModalOpen, isResetPasswordModalOpen, getCurrentEmail }: any) => {

    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const [messageApi, contextHolder] = message.useMessage();

    const [regError, setRegError] = useState('')

    const onFinish = async (values: any) => {
        setRegError('')
        const payload = {
            email: values.email
        };
        try {
            const response: any = await resetPassword({ payload }).unwrap();
            console.log(response)
        } catch (error: any) {
            console.log(error);
            error?.data ? setRegError(error?.data === 'Password reset email sent.' ? '' : error?.data) : setRegError('')
            if (error?.data === 'Password reset email sent.') {
                messageApi.success('Password reset email sent successfully.');
                setIsResetPasswordModalOpen(false)
            }


        }
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
       <>
        {contextHolder}
        <Modal title="Reset Password Request" rootClassName='reset-password-modal' open={isResetPasswordModalOpen} onCancel={() => setIsResetPasswordModalOpen(false)} footer={false}>
            <br />
            <br />
            <div className="wrapper-auth">
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical">
                    <Row gutter={[20, 0]}>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'Please enter a valid email address!',
                                    },
                                    { required: true, message: 'Required field' }]}
                            >
                                <Input placeholder="Type here" value={getCurrentEmail} rootClassName='styled-input' autoComplete='off' />
                            </Form.Item>
                        </Col>
                    </Row>
                    {regError && <div className="error-message-footer">
                        {regError}
                    </div>}
                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <Button htmlType='submit' loading={isLoading} className='common-btn-dull' style={{ width: "100%", marginTop: "30px" }}>Send Request</Button>
                    </div>
                </Form>
            </div>
        </Modal>
       </>
    )
}

export default ResetPasswordModal