import jwt from 'jsonwebtoken'

export const verifyToken = async (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
         return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1]
    try{
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    console.log(decoded)
    req.user = decoded
    next()
    }catch(err){
      return  res.status(401).json({ message: "Invalid or expired token" });
    }

}


export const isAdmin = (req,res,next)=>{
    if(req.user.role != "admin"){
      return res.status(403).json({ message: "Access denied: Admins only" });  
    }
    next()
}