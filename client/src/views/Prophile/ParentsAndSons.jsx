import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { imagenHijo, imagenPadre, infoUser } from "./ObjetoPrueba";
import { useAppSelector } from "../../Hooks/useAppSelector";
const ParentsAndSons = ({ estado }) => {
  const student = estado;
  console.log(student);


  return (
    <>
      <div className={style.bgContainer}>
        <article className={style.articleRole}>
          <section className={style.infoUser}>
            <div className={style.ContainerUserInfo}>
              <h1 className={style.titlePpal}>¡Bienvenidos a EDUSYNC!</h1>
              <div className={style.ToContactUser}>
                <div>
                  <b className={style.detailInfo}>Correo: </b>
                  {student?.email}
                </div>
                <div>
                  {student.role === "parent" ? (
                    <div>
                      <b className={style.detailInfo}>Direccion </b>{" "}
                      {student.address}
                    </div>
                  ) : student.role === "student" ? (
                    <div>
                      <b className={style.detailInfo}>Grado </b>
                      {student?.Curso?.curso}
                    </div>
                  ): null}
                </div>
                <div>
                <b className={style.detailInfo}>Celular </b>
                  {student?.phone}
                </div>
              </div>
              <div className={style.redireccionAPadre}>
                {student.role === "parent" ? (
                    <div>
                    <h2>Seleccione un Hijo</h2>
                    {student.Students &&
                      student.Students.map((e) => {
                        return (
                          <Link to={`/dashboard/${e.id}`}>
                            <button className={style.btnSons}>
                              {e.fullName}
                            </button>
                          </Link>
                        );
                      })}
                  </div>
                ) : (
                  <Link to="/dashboard/profile">
                  <button>Detalles</button>
                </Link>
                )}
              </div>
            </div>
          </section>
          <div className={style.containerPicture}>
            <section>
              <div>
                <p className={style.Name}>{student?.fullName}</p>
              </div>
            </section>

            {student.role === "teacher" ? (
              <img className={style.imgRole} src={imagenPadre} alt="" />
            ) : (
              <img className={style.imgRole} src={student.photo} alt="" />
            )}
            
            <p>{student.role === "parent" ? "Padre" : student.role === "student" ? "Estudiante" : "Profesor"}</p>
          </div>
        </article>
      </div>
    </>
  );
};
export default ParentsAndSons;