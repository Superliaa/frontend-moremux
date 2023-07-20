export const ProtectedComponent = ({user, children}) => {

   if(user)
   {
    return children? children: <></>;
   }else{
    return <></>;
   }
    
   
};
  
