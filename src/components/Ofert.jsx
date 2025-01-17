

const OfertaComercial = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">ASCYXL SERVICE & REPRESENTATION INTERNATIONAL INC.</h1>
                <h2 className="text-lg font-semibold text-gray-700">OFERTA COMERCIAL</h2>
              </div>
              <div className="ml-auto">
                <p className="text-gray-600">5/1/2024</p>
              </div>
            </div>
    
            {/* Client Info */}
            <div className="mb-6 space-y-2">
              <div className="flex gap-2">
                <p className="font-semibold w-32">Cliente:</p>
                <div className="border-b border-gray-300 flex-1"></div>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold w-32">Email:</p>
                <div className="border-b border-gray-300 flex-1"></div>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold w-32">Teléfono:</p>
                <div className="border-b border-gray-300 flex-1"></div>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold w-32">Dirección:</p>
                <p>Terminal Mariel, Cuba</p>
              </div>
            </div>
    
            <p className="mb-4 text-sm font-semibold">Todos los precios están en dólares USD</p>
    
            {/* Product Tables */}
            {[
              {
                product: 'AZUCAR TIPO A',
                price: 53.06,
                quantity: '29.5 TN',
                containers: 1,
                total: 29508.00,
                shipping: 2500.00,
                finalTotal: 29408.00
              },
              {
                product: 'AZUCAR CRUDO',
                price: 52.06,
                quantity: '29.5 TN',
                containers: 1,
                total: 24691.80,
                shipping: 2500.00,
                finalTotal: 27591.80
              },
              {
                product: 'AZUCAR CRUDO',
                price: 51.06,
                quantity: '29.5 TN',
                containers: 1,
                total: 24161.80,
                shipping: 2500.00,
                finalTotal: 27061.80
              }
            ].map((item, index) => (
              <div key={index} className="mb-8 border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="p-2 border">Producto</th>
                      <th className="p-2 border">Descripción</th>
                      <th className="p-2 border">Embalaje</th>
                      <th className="p-2 border">Precio por saco</th>
                      <th className="p-2 border">Cantidad de TM/Contenedor</th>
                      <th className="p-2 border">Cantidad de contenedores</th>
                      <th className="p-2 border">Ex/Work (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border text-center">1</td>
                      <td className="p-2 border">{item.product}</td>
                      <td className="p-2 border">630 sacos de 50 kg</td>
                      <td className="p-2 border text-right">${item.price.toFixed(2)}</td>
                      <td className="p-2 border text-center">{item.quantity}</td>
                      <td className="p-2 border text-center">{item.containers}</td>
                      <td className="p-2 border text-right">${item.total.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="border"></td>
                      <td className="p-2 border">Importe Transporte</td>
                      <td className="p-2 border text-right">$400.00</td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="border"></td>
                      <td className="p-2 border">Importe FOB</td>
                      <td className="p-2 border text-right">${item.total.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="border"></td>
                      <td className="p-2 border">+ Gasto Flete Marítimo</td>
                      <td className="p-2 border text-right">${item.shipping.toFixed(2)}</td>
                    </tr>
                    <tr className="font-semibold">
                      <td colSpan={5} className="border"></td>
                      <td className="p-2 border bg-blue-50">Total CIF Mariel, Cuba</td>
                      <td className="p-2 border text-right bg-blue-50">${item.finalTotal.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
    
            {/* Banking Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Datos bancarios:</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-blue-100 p-2 font-semibold">Banco en Canadá (CAD)</div>
                  <div className="p-4 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <span className="font-semibold">Banco:</span>
                      <span>TD Canada Trust</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="font-semibold">Dirección:</span>
                      <span>5855 Blvd. Le Carrefour</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="font-semibold">Número cuenta:</span>
                      <span>45411 004 5034451</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="font-semibold">SWIFT:</span>
                      <span>TDOMCATTTOR</span>
                    </div>
                  </div>
                </div>
    
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-blue-100 p-2 font-semibold">Banco en dólares EE. UU.</div>
                  <div className="p-4 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <span className="font-semibold">Banco:</span>
                      <span>TD Canada Trust</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="font-semibold">Dirección:</span>
                      <span>5855 Blvd. Le Carrefour</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="font-semibold">Número cuenta:</span>
                      <span>45411 004 7029040</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="font-semibold">SWIFT:</span>
                      <span>TDOMCATTTOR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Terms and Conditions */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Condiciones oferta</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <span className="font-semibold">CIF:</span>
                  <span>-</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="font-semibold">Validez oferta:</span>
                  <span>1/2/2024</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="font-semibold">Moneda:</span>
                  <span>USD</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="font-semibold">Fecha entrega:</span>
                  <span>15-18</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <span className="font-semibold">Forma de pago:</span>
                  <span>Transferencia bancaria</span>
                </div>
              </div>
    
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">NOTAS:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>FLETE Marítimo: (1-20HC) Puerto de Mariel, según el INCOTERMS® 2020</li>
                  <li>Fletes puesto a puerto e incluyen recargos al flete y THCO</li>
                  <li>Sujeto a gastos en destino</li>
                  <li>Sujeto a disponibilidad de equipos</li>
                  <li>Recargos sujetos a variación por parte de las líneas</li>
                  <li>ORIGINALES B/L a la EXPORT en CUBA según sus instrucciones.</li>
                  <li>Documentación: 50 X B/L</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
};

export default OfertaComercial;
