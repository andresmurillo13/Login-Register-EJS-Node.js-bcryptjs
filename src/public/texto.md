// empleados.save = async (req, res) => {

//     // const data = req.body;
//   const { nombre_completo, correo_electronico, contraseña, rol_empleado}=req.body;
//   console.log(req.body)
//     try {
//   let passwordHash = await bcryptjs.hash(contraseña,8);
//   console.log(passwordHash);
//     } catch (error) {
//   throw error;
//     }
  
  
//     req.getConnection((err, conn) => {
  
//       conn.query('INSERT INTO empleados set ?', [nombre_completo, correo_electronico, contraseña, rol_empleado], (err, empleados) => {
  
//         res.redirect('/');
//       })
//     })
//   };





//   empleados.save = async (req, res) => { 

//     const data = req.body;
  
  
    
    
//     req.getConnection(  (err, conn) => {
      
//       conn.query('INSERT INTO empleados set ?', [data], (err, empleados) => {
      
//         res.redirect('/');
//       })
//     })
//   };




// empleados.save = async (req, res) => {

//   const user= req.body.nombre_completo;
//   const email= req.body.correo_electronico;
//   const contraseña= req.body.contraseña;
//   const rol= req.body.rol_empleado;
  
//   console.log(req.body)
//     try {
//   let passwordHash = await bcryptjs.hash(contraseña,8);
//   console.log(passwordHash);

  
//     } catch (error) {
//   throw error;
//     }
  
  
//     req.getConnection(async (err, conn) => {
  
//       conn.query('INSERT INTO empleados set = ?', [], (err, empleados) => {
//       res.redirect('/');
//       })
//     })
//   };