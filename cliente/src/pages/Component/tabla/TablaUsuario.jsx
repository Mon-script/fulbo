import { Avatar, Badge, Button, Popover, Table } from 'keep-react';
import { Crown, DotsThreeOutline, Trash } from 'phosphor-react';
import { FechayHora } from "../DatePicker";
import { ExcelExporter } from "../botones/exportExelBoton";
import { useContext } from 'react';
import { format } from 'date-fns';
import { UserContext } from '../../../userContext';
import {message} from  'antd'

export const TablaUsuario = ({update, dataArray}) => {
  
  
  const { user } = useContext(UserContext);
 
  const inabilitarUser = (id)=>{
    if (window.confirm('¿Está seguro de inabilitar este usuario?')){
      fetch('http://localhost:3000/deleteUsuario/'+id,{method:'DELETE'})
    .then(resp =>( resp.text() ))
    .then(resp =>{console.log(resp)
      message.success(' Operacion exitosa')
    })
    update(true)
    }
    

  }
  const abilitarUser = (id)=>{
    if (window.confirm('¿Está seguro de rectivar este usuario?')){
      fetch('http://localhost:3000/reintegrarUsuario/'+id,{method:'PUT'})
    .then(resp =>( resp.text() ))
    .then(resp =>{console.log(resp)
      message.succes(' Operacion exitosa')
    })
    update(true)
    }
  }

  return (
    <Table showCheckbox={false}>
      <Table.Caption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600">USUARIOS</p>
          </div>
          <div className="flex items-center gap-5">
            {/* Aquí va el botón */}
            <ExcelExporter data={dataArray} fileName="table_data" />
            {/* Aquí termina el espacio del botón */}
            <FechayHora />
          </div>
        </div>
      </Table.Caption>
      <Table.Body className="divide-gray-25 divide-y">
        {dataArray.map((item, index) => (
          <Table.Row className="bg-white" key={index}>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img={item.avatar} size="md" />
                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{item.nombre}</p>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{item.apellido}</p>
                      <span className="text-body-6 font-normal text-metal-500">Nro Interno: {item.id}</span> <br />
                      <span className="text-body-6 font-normal text-metal-500">Estado: {item.activo==1? 'ACTIVIDAD':'INACTIVO'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500"><p className="-mb-0.5 text-body-4 font-medium text-metal-600">Fecha de incorporacion: </p> <br />{format(new Date(item.fecha_inicio), 'dd/MM/yyyy')}</p>
              
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">rol: {item.rol}</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge colorType="light" color="success" icon={<Crown size={18} weight="light" />} iconPosition="left">
                  Contraseña:
                  <p>Encriptada por motivos de seguridad</p>
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Usuario</p>
              <p className="text-body-6 font-normal text-metal-500">{item.usuario}</p>
            </Table.Cell>
            <Table.Cell>
              <Popover showDismissIcon={false} showArrow={false} className="w-52 border border-metal-100 p-2">
                <Popover.Container className="!mt-0 !block">
                  <ul>
                    <li className="rounded px-2 py-1 hover:bg-metal-100">
                      {item.activo===1? <button onClick={()=>inabilitarUser(item.id)} className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Delete</span>
                        <span>
                          <Trash />
                        </span>
                      </button>  :   <button onClick={()=>abilitarUser(item.id)} className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Activar</span>
                        <span>
                          <Crown />
                        </span>
                      </button>}
                    </li>
                  </ul>
                </Popover.Container>
                <Popover.Action>

                  {user && user.role === 'admin' ? <Button type="outlineGray" size="xs" circle={true}>
                    <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                  </Button> :''}

                </Popover.Action>
              </Popover>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
/*
 id_usuario BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  usuario VARCHAR(50) NOT NULL,
  contrasena TEXT NOT NULL,
  id_rol BIGINT NOT NULL,
  email_usuario VARCHAR(50),
  telefono_usuario BIGINT NOT NULL,
  fecha_inicio DATE NOT NULL,
  activo BOOLEAN NOT NULL,
*/ 