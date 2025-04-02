interface AlphaAccessRequest {
    email: string;
    product: string;
    name: string;
}

import { PUBLIC_AQUABERRY_CRM_API } from "$env/static/public";


export class AlphaAccessService {
    static async requestAccess(data: AlphaAccessRequest): Promise<boolean> {
        try {
            const response = await fetch(PUBLIC_AQUABERRY_CRM_API + '/api/alpha-signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            console.log(response);
            return response.ok;
        } catch (error) {
            console.error('Error submitting alpha access request:', error);
            return false;
        }
    }
} 