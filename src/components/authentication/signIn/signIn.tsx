import { useState } from 'react'
import "../authentication.scss"
import { Button, Col, Form, Input, Row } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import ehbIcon from '../../../assets/icons/ehb-companies/ehb-main-dark.svg'
import { usePostLoginUserMutation } from '../../../store/apis/user'
import ResetPasswordModal from './resetPasswordModal/resetPasswordModal'

const SignIn = () => {
    const [postLoginUser, { isLoading }] = usePostLoginUserMutation();
    const [getCurrentEmail, setGetCurrentEmail] = useState('')

    const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false)

    const [regError, setRegError] = useState('')
    const navigate = useNavigate()

    const location = useLocation();

    const currentRoute = location.pathname;

    const onFinish = async (values: any) => {
        localStorage.clear();
        document.cookie = `me=; domain=.ehb.com.co; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = "last_name=; domain=.ehb.com.co; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "first_name=; domain=.ehb.com.co; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "email=; domain=.ehb.com.co; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "user_id=; domain=.ehb.com.co; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "ref=; domain=.ehb.com.co; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "user_name=; domain=.ehb.com.co; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "phoneNumber=; domain=.ehb.com.co; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        setRegError('')
        setGetCurrentEmail(values.email)
        const payload = {
            identifier: values.email,
            password: values.password,
        };
        try {
            const response: any = await postLoginUser({ payload }).unwrap();
            const jwtToken = response.token;
            localStorage.setItem('token', jwtToken);
            document.cookie = `me=${jwtToken}; domain=.ehb.com.co; path=/;`;
            if (currentRoute === '/sign-in/affilate') {
                
                window.location.href = 'https://ehb.com.co/affiliate';
            } else {
                navigate('/home');
            }
        } catch (error: any) {
            console.log(error);
            error?.data ? setRegError(error?.data) : setRegError('')
        }
    };


    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className='auth-main-wrapper tex-w'>
                <div className='header-alg'>
                    <img src={ehbIcon} width={70} alt="" />
                    <p>Sign In to <strong>EHB</strong> </p>
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
                                    label="Email / Username"
                                    name="email"
                                    rules={[{ required: true, message: 'Required field' }]}
                                >
                                    <Input placeholder="Type here" rootClassName='styled-input' autoComplete='off' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password rootClassName='styled-input' placeholder="Enter your password" />
                                </Form.Item>
                            </Col>
                        </Row>
                        {regError && <div className="error-message-footer">
                            {regError}
                        </div>}
                        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                            <Button htmlType='submit' loading={isLoading} className='common-btn-dull' style={{ width: "100%", marginTop: "30px" }}>Login</Button>
                        </div>
                        <p className='bottom-res'>Didn't have an account ? <span onClick={() => navigate('/sign-up')}>Register</span></p>
                        <p className='bottom-res'>Forgot Password ? <span onClick={() => setIsResetPasswordModalOpen(true)}>Click Here</span></p>
                    </Form>
                </div>
                <div className='lb-docs-nav'>
                    <a href="https://ehb.com.co/#/terms-and-conditions"><p>Terms</p></a>
                    <a href="https://ehb.com.co/#/refund-policy"><p>Refund Policy</p></a>
                    <a href="https://ehb.com.co/#/about-us"><p>About</p></a>
                    <a href="https://ehb.com.co/#/contact-us"><p className='ex-w'>Contact EHB support</p></a>
                </div>

                <div style={{ position: "absolute", bottom: "10px", left: "10px", color: "rgb(255 255 255 / 19%)", fontSize: "12px" }}>V 1.3</div>

                <ResetPasswordModal getCurrentEmail={getCurrentEmail} isResetPasswordModalOpen={isResetPasswordModalOpen} setIsResetPasswordModalOpen={setIsResetPasswordModalOpen} />

            </div>
        </>
    )
}

export default SignIn