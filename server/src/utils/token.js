import jsw from 'jsonwebtoken';

export function generateToken(data,secret){

    const payload = {
        id:data._id,
        name:data.name,
        email:data.email,
        imageUrl:data.imageUrl
    }

    
    const token = jsw.sign(payload,secret,{expiresIn:'2h'});

    return token;
}
