import { useEffect, useState } from 'react'
import "../authentication.scss"
import { Button, Checkbox, Col, Form, Input, Row, Select, Switch } from 'antd'
import ehbIcon from '../../../assets/icons/ehb-companies/ehb-main-dark.svg'


import { useNavigate, useParams } from 'react-router-dom'
import { countryOptions } from '../../../mock/listCountries'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { usePostCreateUserMutation } from '../../../store/apis/user'
import Welcome from './welcome'

const { Option } = Select;

const SignUp = () => {
    const [postCreateUser, { isLoading }] = usePostCreateUserMutation();
    const [isRefferal, setIsRefferal] = useState(false)
    const [regError, setRegError] = useState('')
    const [isWelcome, setIsWelcome] = useState(false)
    const [userInfo, setUserInfo] = useState()

    const { id } = useParams();



    useEffect(() => {
        if (isWelcome) {
            const timeoutId = setTimeout(() => {
                setIsWelcome(false);
                navigate('/sign-in')
            }, 5000);
            return () => clearTimeout(timeoutId);
        }
    }, [isWelcome]);

    const navigate = useNavigate()



    function generateCustomId() {
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let customId: any = '';

        for (let i = 0; i < 9; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            customId += characters.charAt(randomIndex);
        }

        return customId;
    }
    const reffID = generateCustomId();

    const onFinish = async (values: any) => {
        setRegError('')
        const payload = {
            "firstName": values.firstName,
            "lastName": values.lastName,
            "userName": values.userName,
            "email": values.email,
            "country": values.country,
            "phoneNumber": values.phone,
            "password": values.password,
            "referralCode": values.reffCode,
            "affUser": reffID,
        }
        try {
            const response: any = await postCreateUser({ payload }).unwrap();
            if (response) {
                setIsWelcome(true)
                setUserInfo(response)
            }
        } catch (error: any) {
            console.log(error)
            error?.data ? setRegError(error?.data) : setRegError('')
        }
    };
    const onFinishFailed = (errorInfo: any) => {
    };
    const validateConfirmPassword = ({ getFieldValue }: any) => ({
        validator(_: any, value: any) {
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('The two passwords do not match'));
        },
    });
    
    const validateStrongPassword = (_: any, value: any) => {
        const lessStrictPasswordRegex = /^(?=.*[A-Z]).{8,}$/;

        if (!value || lessStrictPasswordRegex.test(value)) {
            return Promise.resolve();
        }

        return Promise.reject(new Error('Password must be at least 8 characters long and include at least one uppercase letter.'));
    };
    const onChange = (checked: boolean) => {
        setIsRefferal(checked)
    };

    const onTermsChange = (e: CheckboxChangeEvent) => {
    };
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    return (
        <>
            {
                !isWelcome ?
                    <div className='auth-main-wrapper tex-w'>
                        <div className='header-alg'>
                            <img src={ehbIcon} width={70} alt="" />
                            <p>Register to <strong>EHB</strong> </p>
                        </div>
                        <div className="wrapper-auth">
                            <Form
                                name="basic"
                                // initialValues={{ remember: true }}
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    userName: '',
                                    email: '',
                                    country: '',
                                    phone: '',
                                    password: '',
                                    confirmPassword: '',
                                    reffCode: id ? id : 'admin',
                                    isRefferal: false,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                layout="vertical">
                                <Row gutter={[20, 0]}>
                                    <Col xs={24} sm={24} md={24} lg={12}>
                                        <Form.Item
                                            label="First Name"
                                            name="firstName"
                                            rules={[{ required: true, message: 'Required field' }]}
                                        >
                                            <Input placeholder="Type here" rootClassName='styled-input' autoComplete='off' />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={12}>
                                        <Form.Item
                                            label="Last Name"
                                            name="lastName"
                                            rules={[{ required: true, message: 'Required field' }]}
                                        >
                                            <Input placeholder="Type here" rootClassName='styled-input' />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24}>
                                        <Form.Item
                                            label="User Name"
                                            name="userName"
                                            rules={[{ required: true, message: 'Required field' }]}
                                        >
                                            <Input placeholder="Type here" rootClassName='styled-input' />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24}>
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[
                                                {
                                                    type: 'email',
                                                    message: 'Please enter a valid email address!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Email is required!',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Type here" rootClassName='styled-input' autoComplete='off' />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24}>
                                        <Form.Item
                                            label="Select Country"
                                            name="country"
                                            rules={[{ required: true, message: 'Required field' }]}
                                        >
                                            <Select
                                                showSearch
                                                placeholder="Select a country"
                                                rootClassName='selector-c'
                                            >
                                                {countryOptions.map((option) => (
                                                    <Option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24}>
                                        <Form.Item
                                            label="Phone"
                                            name="phone"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter your phone number!',
                                                },
                                                {
                                                    pattern: phoneRegex,
                                                    message: 'Invalid phone number format! (e.g., +123-4567890123 or 1234567890)',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Type here" rootClassName='styled-input' autoComplete='off' />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={24} md={24} lg={24}>
                                        <Form.Item
                                            name="password"
                                            label="Password"
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

                                    <Col xs={24} sm={24} md={24} lg={24}>
                                        <Form.Item
                                            label="Refferal Code"
                                            name="reffCode"
                                            rules={[{ required: false, message: 'Required field' }]}
                                        >
                                            <Input placeholder="Type here" rootClassName='styled-input' autoComplete='off' />
                                        </Form.Item>
                                    </Col>

                                    <br />
                                    <br />
                                    <Col xs={24} sm={24} md={24} lg={24}>
                                        <Form.Item
                                            label=""
                                            name="readTerms"
                                            rules={[{ required: false, message: 'Required field' }]}
                                        >
                                            <div>
                                                <Checkbox onChange={onTermsChange}> <span style={{ color: "rgb(152 152 152)" }}>I have read terms and conditions</span></Checkbox>
                                            </div>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                {regError && <div className="error-message-footer">
                                    {regError}
                                </div>}
                                <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                    <Button htmlType='submit' loading={isLoading} className='common-btn-dull' style={{ width: "100%", marginTop: "30px" }}>Register</Button>
                                </div>
                                <p className='bottom-res'>Already have an account ? <span onClick={() => navigate('/sign-in')}>Sign in</span></p>
                            </Form>

                        </div>
                        <div className='lb-docs-nav'>
                            <a href="https://ehb.com.co/#/terms-and-conditions"><p>Terms</p></a>
                            <a href="https://ehb.com.co/#/refund-policy"><p>Refund Policy</p></a>
                            <a href="https://ehb.com.co/#/about-us"><p>About</p></a>
                            <a href="https://ehb.com.co/#/contact-us"><p className='ex-w'>Contact EHB support</p></a>
                        </div>
                    </div>
                    :
                    <Welcome response={userInfo} />
            }



        </>

    )
}

export default SignUp