import { useState } from 'react'
import "../authentication.scss"
import { Button, Checkbox, Col, Form, Input, Row, Select, Steps, Switch } from 'antd'
import ehbIcon from '../../../assets/icons/ehb-companies/ehb-main-dark.svg'


import { useNavigate } from 'react-router-dom'
import { countryOptions } from '../../../mock/listCountries'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { usePostCreateUserMutation } from '../../../store/apis/user'

const { Option } = Select;

const SignUp = () => {

    const [postCreateUser, { isLoading }] = usePostCreateUserMutation();

    const [isRefferal, setIsRefferal] = useState(false)
    const [regError, setRegError] = useState('')
    const navigate = useNavigate()
    const onFinish = async (values: any) => {
        setRegError('')
        const payload = {
            "firstName": values.firstName,
            "lastName": values.lastName,
            "email": values.email,
            "country": values.country,
            "phoneNumber": values.phone,
            "password": values.password,
            "referralCode": values.reffCode
        }
        try {
            await postCreateUser({ payload }).unwrap();
            navigate('/sign-in')
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
        // Use a regular expression to check for a strong password (minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character)
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!value || strongPasswordRegex.test(value)) {
            return Promise.resolve();
        }

        return Promise.reject(new Error('Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'));
    };
    const onChange = (checked: boolean) => {
        setIsRefferal(checked)
    };

    const onTermsChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;




    return (
        <div className='auth-main-wrapper tex-w'>
            <div className='header-alg'>
                <img src={ehbIcon} width={70} alt="" />
                <p>Register to <strong>EHB</strong> </p>
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

                        {!isRefferal &&
                            <Col xs={24} sm={24} md={24} lg={24}>
                                <Form.Item
                                    label="Refferal Code"
                                    name="reffCode"
                                    rules={[{ required: true, message: 'Required field' }]}
                                >
                                    <Input placeholder="Type here" rootClassName='styled-input' autoComplete='off' />
                                </Form.Item>
                            </Col>}
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item
                                label=""
                                name="isRefferal"
                                rules={[{ required: false, message: 'Required field' }]}
                            >
                                <div>
                                    <Switch checked={isRefferal} rootClassName='refferal-switch' onChange={onChange} />
                                    <label htmlFor="" style={{ color: "rgb(152 152 152)" }}>&nbsp; I Do'nt have Refferal code </label>
                                </div>
                            </Form.Item>
                        </Col>
                        <br />
                        <Col xs={24} sm={24} md={24} lg={24}>
                            <Form.Item
                                label=""
                                name="isRefferal"
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
                <p>Terms</p>
                <p>Privacy</p>
                <p>About</p>
                <p className='ex-w'>Contact EHB support</p>
            </div>
        </div>
    )
}

export default SignUp