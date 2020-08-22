import axios from 'axios'
import { useQuery } from 'react-query';
import swal from 'sweetalert';

export const getUsers = (params) => {
    
    return useQuery(`users-${params}`, async () => {
        const { data } = await axios.get(`https://reqres.in/api/users?${params}`)
        .catch(error => {
            swal("Error", "error al consultar el API", "error");
        });

        return data.data;
    });
}


