import { useNavigate } from 'react-router-dom';

const useNavBar = () => {
    const navigate = useNavigate()

    const handleSignOut = () => {
        try {
            localStorage.clear();
            document.cookie = `me=; domain=.ehb.com.co; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            document.cookie = "last_name=; domain=.ehb.com.co; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "first_name=; domain=.ehb.com.co; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "email=; domain=.ehb.com.co; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "user_id=; domain=.ehb.com.co; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "ref=; domain=.ehb.com.co; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "user_name=; domain=.ehb.com.co; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            
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