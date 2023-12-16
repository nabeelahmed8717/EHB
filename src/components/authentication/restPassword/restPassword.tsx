import { useState } from 'react'
import "../authentication.scss"
import { Alert, Button, Col, Form, Input, Row, message } from 'antd'
import ehbIcon from '../../../assets/icons/ehb-companies/ehb-main-dark.svg'
import { usePostResetPasswordMutation } from '../../../store/apis/user'
import { useNavigate, useParams } from 'react-router-dom'

const RestPassword = () => {
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage();
    const [postResetPassword, { isLoading }] = usePostResetPasswordMutation();
    const [regError, setRegError] = useState('')
    const { token } = useParams();
    const onFinish = async (values: any) => {
        setRegError('')
        const payload = {
            password: values.password,
        };
        try {
            const response: any = await postResetPassword({ payload, token }).unwrap();
            
        } catch (error: any) {
            console.log(error);
            error?.data ? setRegError(error?.data === 'Password reset successfully' ? '' : error?.data) : setRegError('')
            if (error?.data === 'Password reset successfully') {
                messageApi.success('Password reset successfully');
                const timeoutId = setTimeout(() => {
                    navigate('/sign-in');
                  }, 2000);
                  return () => clearTimeout(timeoutId);
               
            }
        }
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const validateConfirmPassword = ({ getFieldValue }: any) => ({
        validator(_: any, value: any) {
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('The two passwords do not match'));
        },
    });
    // const validateStrongPassword = (_: any, value: any) => {
    //     // Use a regular expression to check for a strong password (minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character)
    //     const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    //     if (!value || strongPasswordRegex.test(value)) {
    //         return Promise.resolve();
    //     }
    //     return Promise.reject(new Error('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'));
    // };
    const validateStrongPassword = (_: any, value: any) => {
        // Use a regular expression to check for a less strict password (minimum 8 characters with at least one uppercase letter)
        const lessStrictPasswordRegex = /^(?=.*[A-Z]).{8,}$/;

        if (!value || lessStrictPasswordRegex.test(value)) {
            return Promise.resolve();
        }

        return Promise.reject(new Error('Password must be at least 8 characters long and include at least one uppercase letter.'));
    };

    return (
        <>
       {contextHolder}
        <div className='auth-main-wrapper tex-w'>
            <div className='header-alg'>
                <img src={ehbIcon} width={70} alt="" />
                <p>Reset Password</p>
            </div>
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
                                name="password"
                                label="New Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your password!',
                                    },
                                    {
                                        validator: validateStrongPassword,
                                    },
                                ]}
                            >
                                <Input.Password rootClassName='styled-input' placeholder="Enter your password" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item
                                name="confirmPassword"
                                label="Confirm Password"
                                dependencies={['password']}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => validateConfirmPassword({ getFieldValue }),
                                ]}
                            >
                                <Input.Password rootClassName='styled-input' placeholder="Confirm your password" />
                            </Form.Item>
                        </Col>
                    </Row>
                    {regError && <div className="error-message-footer">
                        {regError}
                    </div>}
                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <Button htmlType='submit' loading={isLoading} className='common-btn-dull' style={{ width: "100%", marginTop: "30px" }}>Change Password</Button>
                    </div>
                    <p className='bottom-res'>Sign in again ? <span onClick={() => navigate('/sign-in')}>Sign in</span></p>
                </Form>
            </div>
            <div className='lb-docs-nav'>
                <p>Terms</p>
                <p>Privacy</p>
                <p>About</p>
                <p className='ex-w'><em>Contact EHB support</em></p>
            </div>

            <div style={{ position: "absolute", bottom: "10px", left: "10px", color: "rgb(255 255 255 / 19%)", fontSize: "12px" }}>v1.0.1</div>
        </div>
        </>
    )
}

export default RestPassword