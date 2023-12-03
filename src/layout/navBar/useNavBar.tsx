import { useNavigate } from 'react-router-dom';

const useNavBar = () => {
    const navigate = useNavigate()

    const handleSignOut = () => {
        try {
            localStorage.clear();
            document.cookie = `me=; domain=.ehb.com.co; path=/;`;
            navigate('/sign-in');
        } catch (error) {
            console.error('Error during sign out:', error);
        }
    };
    return {
        handleSignOut,
    }
}

export default useNavBar