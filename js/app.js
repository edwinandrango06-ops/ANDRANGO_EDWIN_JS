const precioEntrada = 20;
const cuposIniciales = 50;
const descuentoEstudiantes = 30;
const descuentoDocente = 15;
const descuentoGeneral = 0;
const maximoEntradas = 5;

let cuposDisponibles = cuposIniciales;
let comprasRealizadas = 0;
let totalRecaudado = 0;
let entradasVendidas = 0;
let opcionMenu = "";
let opcion = "";

console.log("=== INICIANDO SISTEMA INNOVA ESPE 2026 ===");

do{
    opcionMenu = prompt(
        "SISTEMA INNOVA ESPE 2026\n\n" +
        "1. Comprar entradas\n" +
        "2. Consultar cupos disponibles\n" +
        "3. Consultar ingresos acumulados\n" +
        "4. Salir\n\n" +
        "Seleccione una opción (1-4):"
    );
    if (opcionMenu === null) {
        alert("Sistema finalizado por el usuario.");
        break;
    }
    opcion = opcionMenu.trim();

    switch(opcion){
        case "1":{
            
            if (cuposDisponibles === 0) {
                alert("Lo sentimos, el evento está agotado. No quedan cupos disponibles.");
                break;
            }
            let nombreComprador = prompt("Ingrese el nombre completo del comprador:");
            if (nombreComprador === null || nombreComprador.trim() === "") {
                alert("Compra rechazada: Debe ingresar un nombre válido.");
                console.warn("Compra rechazada: Nombre vacío o cancelado.");
                break;
            }

            let tipoIngresado = prompt(
                "Seleccione el tipo de participante:\n" +
                "1. Estudiante (30 % de descuento)\n" +
                "2. Docente (15 % de descuento)\n" +
                "3. Público general (0 % de descuento)\n\n" +
                "Ingrese el número (1, 2 o 3) o el nombre del tipo:"
            );

            if (tipoIngresado === null) {
                alert("Operación cancelada.");
                break;
            }

            let cantidadIngresada = prompt(
                `Cupos disponibles: ${cuposDisponibles}\n` +
                `Ingrese la cantidad de entradas a comprar (1 a ${maximoEntradas}):`
            );

            if (cantidadIngresada === null || cantidadIngresada.trim() === "") {
                alert("Compra rechazada: No se ingresó una cantidad.");
                break;
            }

            let tipoNormalizado = tipoIngresado.trim().toLowerCase();
            let porcentajeDescuento = 0;
            let etiquetaDescuento = "0 %";
            let nombreTipoParticipante = "";
            let tipoValido = true;

            if(tipoNormalizado === "1" || tipoNormalizado === "estudiante"){
                porcentajeDescuento = descuentoEstudiantes;
                etiquetaDescuento = "30 %";
                nombreTipoParticipante = "Estudiante";
            }else if(tipoNormalizado==="2" || tipoNormalizado === "docente"){
                porcentajeDescuento = descuentoDocente;
                etiquetaDescuento = "15 %";
                nombreTipoParticipante = "Docente";
            }else if(tipoNormalizado ==="3" ||
                tipoNormalizado === "publico general" ||
                tipoNormalizado === "público general" ||
                tipoNormalizado === "general"){
                porcentajeDescuento = descuentoGeneral;
                etiquetaDescuento = "0 %";
                nombreTipoParticipante = "Público General";
            }else{
                tipoValido=false;
            }
            if (!tipoValido) {
                alert("Compra rechazada: Tipo de participante no válido.");
                console.warn(`Compra rechazada: Tipo de participante inválido ("${tipoIngresado}").`);
                break;
            }

            let cantidadEntradas = Number(cantidadIngresada.trim());

            if (
                Number.isNaN(cantidadEntradas) ||
                !Number.isInteger(cantidadEntradas) ||
                cantidadEntradas < 1 ||
                cantidadEntradas > maximoEntradas
            ) {
                alert(
                `Compra rechazada: Debe ingresar un número entero entre 1 y ${maximoEntradas}.`
                );
                console.warn(`Compra rechazada: Cantidad inválida ("${cantidadIngresada}").`);
                break;
            }

            if (cantidadEntradas > cuposDisponibles) {
                alert(
                    `Compra rechazada: Cupos insuficientes.\n` +
                    `Solicitadas: ${cantidadEntradas} | Disponibles: ${cuposDisponibles}`
                );
            console.warn(
                `Compra rechazada: Solicitud (${cantidadEntradas}) supera cupos disponibles (${cuposDisponibles}).`
                );
                break;
            }

            let subtotal = cantidadEntradas * precioEntrada;
            let descuento = subtotal * (porcentajeDescuento/100);
            let totalPagar = subtotal - descuento;

            cuposDisponibles -= cantidadEntradas;
            entradasVendidas += cantidadEntradas;
            totalRecaudado += totalPagar;
            comprasRealizadas += 1;

            let resumenCompra =
            `SIMULACIÓN DE UNA COMPRA\n` +
            `Nombre: ${nombreComprador}\n` +
            `Tipo de participante: ${nombreTipoParticipante}\n` +
            `Cantidad de entradas: ${cantidadEntradas}\n\n` +
            `Subtotal: $${subtotal.toFixed(2)}\n` +
            `Descuento (${etiquetaDescuento}): $${descuento.toFixed(2)}\n` +
            `Total a pagar: $${totalPagar.toFixed(2)}\n\n` +
            `Compra realizada exitosamente.\n\n` +
            `Cupos restantes: ${cuposDisponibles}`;

            alert(resumenCompra);
            console.log(resumenCompra);
            console.log("--------------------------------------------------");
            break;
        }

        case "2": {
            let mensajeDisponibilidad = "";

            if (cuposDisponibles > 10) {
                mensajeDisponibilidad = "Cupos disponibles";
            } else if (cuposDisponibles >= 1 && cuposDisponibles <= 10) {
                mensajeDisponibilidad = "Últimos cupos disponibles";
            } else {
                mensajeDisponibilidad = "Evento agotado";
            }

            let reporteCupos =
                `CONSULTA DE CUPOS - INNOVA ESPE 2026\n\n` +
                `Cupos disponibles: ${cuposDisponibles}\n` +
                `Estado: ${mensajeDisponibilidad}`;

            alert(reporteCupos);
            console.log(reporteCupos);
            console.log("--------------------------------------------------");
            break;
        }

        case "3": {

            break;
        }

        case "4": {

            break;
        }

        default: {
            alert("Error: Opción no válida. Por favor, seleccione una opción entre 1 y 4.");
            console.warn(`Opción de menú inválida ingresada: "${opcionMenu}"`);
            break;
        }


    }


}while( opcion != "4");


