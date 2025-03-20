import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const DashboardMovistarAesthetic = () => {
  // Datos de la sección 1: CARGA LABORAL Y BIENESTAR GENERAL
  const cargaTrabajoData = [
    { name: 'Excesiva y desgastante', value: 62.5, count: 5 },
    { name: 'Alta pero manejable', value: 25.0, count: 2 },
    { name: 'Adecuada', value: 12.5, count: 1 }
  ];

  const autonomiaData = [
    { name: 'Algo de autonomía', value: 62.5, count: 5 },
    { name: 'Muy poca autonomía', value: 25.0, count: 2 },
    { name: 'Sin autonomía', value: 12.5, count: 1 }
  ];

  // Datos de la sección 2: CONFORMIDAD CON LA AGENCIA
  const satisfaccionAgenciaData = [
    { name: 'Satisfecho', value: 37.5, count: 3 },
    { name: 'Neutral', value: 50.0, count: 4 },
    { name: 'Insatisfecho', value: 12.5, count: 1 }
  ];

  const proteccionEquipoData = [
    { name: 'Cliente tiene control', value: 62.5, count: 5 },
    { name: 'A veces, podría mejorar', value: 37.5, count: 3 }
  ];

  // Datos de la sección 3: CONFORMIDAD CON EL CLIENTE
  const experienciaClienteData = [
    { name: 'Neutra', value: 50.0, count: 4 },
    { name: 'Negativa', value: 25.0, count: 2 },
    { name: 'Positiva', value: 12.5, count: 1 },
    { name: 'Muy negativa', value: 12.5, count: 1 }
  ];

  const valoracionTrabajoData = [
    { name: 'Más feedback negativo', value: 62.5, count: 5 },
    { name: 'Solo críticas', value: 12.5, count: 1 },
    { name: 'A veces positivo', value: 25.0, count: 2 }
  ];

  // Datos de la sección 4: ALTERNATIVAS SIN SESGO
  const factoresCambioData = [
    { name: 'Oportunidades de crecimiento', value: 75.0, count: 6 },
    { name: 'Equipo más estable', value: 75.0, count: 6 },
    { name: 'Mejor equilibrio personal/laboral', value: 50.0, count: 4 },
    { name: 'Menos micromanagement', value: 37.5, count: 3 },
    { name: 'Procesos más estructurados', value: 25.0, count: 2 },
    { name: 'Mayor autonomía', value: 25.0, count: 2 },
    { name: 'Menos carga de trabajo', value: 12.5, count: 1 }
  ];

  const bienestarDesarrolloData = [
    { name: 'Bastante afectado', value: 50.0, count: 4 },
    { name: 'Un poco afectado', value: 37.5, count: 3 },
    { name: 'Definitivamente necesito cambio', value: 12.5, count: 1 }
  ];

  // Resumen general
  const resumenData = [
    { name: 'Satisfacción positiva con agencia', value: 37.5 },
    { name: 'Experiencia positiva con cliente', value: 12.5 },
    { name: 'Buscando cambio de cuenta', value: 87.5 },
    { name: 'Carga de trabajo alta', value: 87.5 },
    { name: 'Bienestar afectado', value: 62.5 }
  ];

  // Acciones recomendadas 
  const accionesRecomendadas = [
    { prioridad: "CRÍTICA", accion: "Reducir carga laboral y redistribuir tareas" },
    { prioridad: "ALTA", accion: "Establecer límites con el cliente" },
    { prioridad: "ALTA", accion: "Crear un plan de carrera con oportunidades" },
    { prioridad: "MEDIA", accion: "Establecer estructura de equipo estable" },
    { prioridad: "MEDIA", accion: "Revisar compensaciones" }
  ];

  // Colores bonitos
  const COLORS = ['#4361EE', '#3A0CA3', '#7209B7', '#F72585', '#4CC9F0', '#4895EF'];
  const COLORS_ALT = ['#FF6D00', '#FF9E00', '#4CC9F0', '#B5179E', '#560BAD', '#480CA8'];
  const COLORS_SEMAFORO = ['#F72585', '#FCBF49', '#06D6A0'];

  // Custom Pie Label
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 1.1;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill={COLORS[index % COLORS.length]}
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
      >
        {`${value}%`}
      </text>
    );
  };

  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-900 p-8 text-white shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-3">Dashboard: Análisis Movistar</h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-blue-100 text-lg">Encuesta Interna | Marzo 2025 | 8 respuestas</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-lg p-6 border-b-4 border-red-500 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-gray-500 text-sm uppercase font-semibold">Carga alta</h3>
            <p className="text-4xl font-bold text-gray-800 mt-2">87.5%</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-b-4 border-red-500 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-gray-500 text-sm uppercase font-semibold">Buscando cambio</h3>
            <p className="text-4xl font-bold text-gray-800 mt-2">87.5%</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-b-4 border-yellow-500 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-gray-500 text-sm uppercase font-semibold">Bienestar afectado</h3>
            <p className="text-4xl font-bold text-gray-800 mt-2">62.5%</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-b-4 border-blue-500 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-gray-500 text-sm uppercase font-semibold">Satisfacción</h3>
            <p className="text-4xl font-bold text-gray-800 mt-2">37.5%</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-b-4 border-red-500 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-gray-500 text-sm uppercase font-semibold">Experiencia positiva</h3>
            <p className="text-4xl font-bold text-gray-800 mt-2">12.5%</p>
          </div>
        </div>

        {/* Resumen General */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3 flex items-center">
            <span className="w-2 h-8 bg-indigo-500 rounded-full inline-block mr-3"></span>
            Resumen General
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={resumenData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                  <YAxis type="category" dataKey="name" width={200} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Porcentaje']} />
                  <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                    {resumenData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.value > 66 ? COLORS_SEMAFORO[0] : entry.value > 33 ? COLORS_SEMAFORO[1] : COLORS_SEMAFORO[2]} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border-l-4 border-red-500 shadow-md">
              <h3 className="text-xl font-bold mb-4 text-red-800">⚠️ Alerta: Situación Crítica</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center rounded-full bg-red-100 text-red-600 h-6 w-6 mr-3 flex-shrink-0 font-bold">!</span>
                  <span><strong className="text-red-700">87.5%</strong> del equipo está buscando cambio de cuenta</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center rounded-full bg-red-100 text-red-600 h-6 w-6 mr-3 flex-shrink-0 font-bold">!</span>
                  <span>Solo <strong className="text-red-700">12.5%</strong> reporta experiencia positiva</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center rounded-full bg-red-100 text-red-600 h-6 w-6 mr-3 flex-shrink-0 font-bold">!</span>
                  <span><strong className="text-red-700">62.5%</strong> siente bienestar afectado</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-red-200">
                <div className="bg-red-100 p-3 rounded-lg">
                  <p className="font-bold text-red-800 text-center">Se requiere intervención inmediata</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carga Laboral y Autonomía */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3 flex items-center">
              <span className="w-2 h-8 bg-blue-500 rounded-full inline-block mr-3"></span>
              Carga Laboral
            </h2>
            <div className="flex flex-col items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={cargaTrabajoData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    label={renderCustomizedLabel}
                    labelLine={true}
                    paddingAngle={5}
                  >
                    {cargaTrabajoData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Porcentaje']} />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-1 gap-2 mt-4 w-full">
                {cargaTrabajoData.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                    <div className="flex items-center">
                      <span className="inline-block w-4 h-4 mr-2 rounded" style={{backgroundColor: COLORS[index % COLORS.length]}}></span>
                      <span>{entry.name}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold mr-2">{entry.value}%</span>
                      <span className="text-gray-500">({entry.count})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3 flex items-center">
              <span className="w-2 h-8 bg-purple-500 rounded-full inline-block mr-3"></span>
              Autonomía
            </h2>
            <div className="flex flex-col items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={autonomiaData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    label={renderCustomizedLabel}
                    labelLine={true}
                    paddingAngle={5}
                  >
                    {autonomiaData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS_ALT[index % COLORS_ALT.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Porcentaje']} />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-1 gap-2 mt-4 w-full">
                {autonomiaData.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                    <div className="flex items-center">
                      <span className="inline-block w-4 h-4 mr-2 rounded" style={{backgroundColor: COLORS_ALT[index % COLORS_ALT.length]}}></span>
                      <span>{entry.name}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold mr-2">{entry.value}%</span>
                      <span className="text-gray-500">({entry.count})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Agencia y Cliente */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3 flex items-center">
              <span className="w-2 h-8 bg-green-500 rounded-full inline-block mr-3"></span>
              Satisfacción con Agencia
            </h2>
            <div className="flex flex-col items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={satisfaccionAgenciaData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    label={renderCustomizedLabel}
                    labelLine={true}
                    paddingAngle={5}
                  >
                    {satisfaccionAgenciaData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Porcentaje']} />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-1 gap-2 mt-4 w-full">
                {satisfaccionAgenciaData.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                    <div className="flex items-center">
                      <span className="inline-block w-4 h-4 mr-2 rounded" style={{backgroundColor: COLORS[index % COLORS.length]}}></span>
                      <span>{entry.name}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold mr-2">{entry.value}%</span>
                      <span className="text-gray-500">({entry.count})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3 flex items-center">
              <span className="w-2 h-8 bg-yellow-500 rounded-full inline-block mr-3"></span>
              Protección ante Cliente
            </h2>
            <div className="flex flex-col items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={proteccionEquipoData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    label={renderCustomizedLabel}
                    labelLine={true}
                    paddingAngle={5}
                  >
                    {proteccionEquipoData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS_ALT[index % COLORS_ALT.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Porcentaje']} />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-1 gap-2 mt-4 w-full">
                {proteccionEquipoData.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                    <div className="flex items-center">
                      <span className="inline-block w-4 h-4 mr-2 rounded" style={{backgroundColor: COLORS_ALT[index % COLORS_ALT.length]}}></span>
                      <span>{entry.name}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold mr-2">{entry.value}%</span>
                      <span className="text-gray-500">({entry.count})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Factores para Cambio */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-3 flex items-center">
            <span className="w-2 h-8 bg-red-500 rounded-full inline-block mr-3"></span>
            Factores para Cambio de Cuenta
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={factoresCambioData.sort((a, b) => b.value - a.value)}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" tickFormatter={(value) => `${value}%`} />
              <YAxis dataKey="name" type="category" width={160} />
              <Tooltip formatter={(value) => [`${value}%`, 'Porcentaje']} />
              <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                {factoresCambioData
                  .sort((a, b) => b.value - a.value)
                  .map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                    />
                  ))
                }
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
            {factoresCambioData
              .sort((a, b) => b.value - a.value)
              .map((entry, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <div className="flex items-center">
                    <span className="inline-block w-4 h-4 mr-2 rounded" style={{backgroundColor: COLORS[index % COLORS.length]}}></span>
                    <span>{entry.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold mr-2">{entry.value}%</span>
                    <span className="text-gray-500">({entry.count})</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* Conclusiones */}
        <div className="bg-red-50 rounded-xl shadow-lg p-8 mb-10 border-l-4 border-red-500">
          <h2 className="text-xl font-bold mb-6 text-red-800 border-b border-red-200 pb-3">🚨 CONCLUSIONES Y PLAN DE ACCIÓN URGENTE</h2>
          <div className="space-y-4">
            <p className="font-bold text-red-800">La situación del equipo que atiende la cuenta Movistar es CRÍTICA y REQUIERE ACCIÓN INMEDIATA:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">Problemas Identificados</h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-700">
                  <li><strong>87.5% buscando salir:</strong> Riesgo inminente de fuga de talento</li>
                  <li><strong>62.5% con carga excesiva:</strong> Burnout y deterioro de la calidad</li>
                  <li><strong>62.5% sin protección:</strong> La agencia no establece límites con el cliente</li>
                  <li><strong>75% sin crecimiento:</strong> Falta de oportunidades de desarrollo</li>
                  <li><strong>62.5% con bienestar afectado:</strong> Impacto en la salud mental</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 mb-2">Acciones Recomendadas</h3>
                <div className="space-y-2">
                  {accionesRecomendadas.map((accion, index) => (
                    <div 
                      key={index} 
                      className="flex items-center p-2 rounded"
                      style={{
                        backgroundColor: accion.prioridad === "CRÍTICA" ? "rgba(247, 37, 133, 0.1)" : 
                                       accion.prioridad === "ALTA" ? "rgba(252, 191, 73, 0.1)" : 
                                       "rgba(6, 214, 160, 0.1)"
                      }}
                    >
                      <span 
                        className="inline-flex items-center justify-center rounded-full h-6 w-6 mr-3 flex-shrink-0 font-bold text-sm"
                        style={{
                          backgroundColor: accion.prioridad === "CRÍTICA" ? "#F72585" : 
                                         accion.prioridad === "ALTA" ? "#FCBF49" : 
                                         "#06D6A0",
                          color: "white"
                        }}
                      >
                        {accion.prioridad === "CRÍTICA" ? "C" : accion.prioridad === "ALTA" ? "A" : "M"}
                      </span>
                      <span>{accion.accion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-red-100 p-4 rounded-lg mt-4">
              <p className="font-bold text-red-800 text-center">SIN ACCIÓN INMEDIATA, LA CUENTA ENFRENTA ALTO RIESGO DE COLAPSO POR ROTACIÓN MASIVA DE PERSONAL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMovistarAesthetic;