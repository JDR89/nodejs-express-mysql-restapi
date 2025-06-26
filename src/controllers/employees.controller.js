import pool from "../../database/database.js";

export const getEmployees = async(req, res) => {
    
    try {
        
        const [result] = await pool.query("SELECT * FROM employee");
        res.json(result);
        

    } catch (error) {
        res.status(500).json({ message: "Error al obtener los empleados" });
    }
};

export const createEmployee = async (req, res) => {
    try {
      const { name, salary } = req.body;
  
      const [result] = await pool.query(
        "INSERT INTO employee (name, salary) VALUES (?, ?)",
        [name, salary]
      );
  
      res.status(200).json({ 
        message: "Empleado creado correctamente",
        id: result.insertId,
        name,
        salary
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error al crear el empleado" });
    }
  };

export const updateEmployee = async(req, res) => {
    const{id}=req.params
    const{name, salary}=req.body

  try {
    const [result]= await pool.query("UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?", [name,salary,id])
    if (result.affectedRows <= 0) {
        return res.status(404).json({ message: "Empleado no encontrado" });
    }
    
    res.json({
        message: "Empleado modificado correctamente",
    })
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar el empleado" });
  }
};

export const deleteEmployee = async(req, res) => {
    const{id}=req.params
    
    try {
        const [result]= await pool.query("DELETE FROM employee WHERE id = ?",[id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: "Empleado no encontrado" });
        }
        
        return res.json({
            message: "Empleado eliminado correctamente",
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error al eliminar el empleado" });
    }

};
