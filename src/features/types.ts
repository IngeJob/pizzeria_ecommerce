export interface cartItemProps {
    id: number,
    nombre?: string,
    descripcion: string,
    linkImagen: string,
    precio?: number,
    tasaIva: number,
    vendible: number,
    borrado?: string,
    stockRequerido?: string,
    created_at: any,
    amount: number,
    nombrePromo?: string,
    precioFinal?: number,
}