const titleValidator = (s) => {
  if (!s) {
    return "Title is required";
  }
  if(typeof(s)!='string'){
    return "Title must be of String type"
  }
  if (s.length < 3) {
    return "Title must have atleast 3 characters";
  }
  if (s.length > 15) {
    return "Title must have atmost 15 characters";
  }
  return null;
};

const contentValidator = (s) => {
    if (!s) {
      return "Content is required";
    }
    if(typeof(s)!='string'){
      return "Content must be of String type"
    }
    if (s.length < 1) {
      return "Content must have atleast 1 character";
    }
    if (s.length > 500) {
      return "Content must have atmost 500 characters";
    }
    return null;
  };

const postValidator = (req, res, next) => {
         let message = titleValidator(req.body.title);
         if(message){
             res.send({error:message});
         }
         else {
         message = contentValidator(req.body.content);
         if(message){
            res.send({error:message});
        }
        else {
            next();
        }  
    }
};

const putValidator =  (req, res, next) => {
    let message = contentValidator(req.body.content);
    if(message){
       res.send({error:message});
   }
   else {
       next();
   }  
};

const detailValidator = (user) => {
  if (!user.username) {
    return "username is required";
  }
  if(typeof(user.username)!='string'){
    return "Title must be of String type"
  }
  if (user.username.length < 4) {
    return "Title must have atleast 3 characters";
  }
  if (user.username.length > 15) {
    return "Title must have atmost 15 characters";
  }

  if (!user.password) {
    return "password is required";
  }
  if(typeof(user.password)!='string'){
    return "Password must be of String type"
  }
  if (user.password.length < 8) {
    return "Password must have atleast 8 characters";
  }
  if (user.password.length > 15) {
    return "Password must have atmost 15 characters";
  }
  return null;
};
const userValidator = (req, res, next) => {
  let message = detailValidator(req.body);
  if(message){
      res.send({error:message});
  }
 else {
     next();
 }  
};

module.exports = {postValidator,putValidator,userValidator}
