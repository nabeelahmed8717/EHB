import { useState } from 'react'
import "../authentication.scss"
import { Button, Col, Form, Input, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import ehbIcon from '../../../assets/icons/ehb-companies/ehb-main-dark.svg'
import { usePostLoginUserMutation } from '../../../store/apis/user'

const SignIn = () => {

    const [postLoginUser, { isLoading }] = usePostLoginUserMutation();

    const [regError, setRegError] = useState('')

    const navigate = useNavigate()
    const onFinish = async (values: any) => {

        setRegError('')

        const payload = {
            email: values.email,
            password: values.password,
        };

        try {
            const response: any = await postLoginUser({ payload }).unwrap();
            const jwtToken = response.token; // Assuming you can access the token from the response
            console.log("response", response)
            localStorage.setItem('token', jwtToken);
            navigate('/home')

        } catch (error: any) {
            console.log(error);
            error?.data ? setRegError(error?.data) : setRegError('')
        }
    };


    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
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
                    // autoComplete="off"
                    layout="vertical">
                    <Row gutter={[20, 0]}>
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item
                                label="Email"
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
                </Form>
            </div>
            <div className='lb-docs-nav'>
                <p>Terms</p>
                <p>Privacy</p>
                <p>About</p>
                <p className='ex-w'><em>Contact EHB support</em></p>
            </div>
        </div>
    )
}

export default SignIn