// boolean

let a: boolean = true;
let b: boolean = false;

// number

let c: number = 17.5;

// string

let d: string = 'Diego'

// void: cuando no retorna nada

function bailar(): void{
    // no retornamos nada
}

function cantar(parametros: string): void {
    if (parametros = '') {
        return; // no indicamos que retornamos, o sea nada
    }
}

// undefined

let f: undefined;
console.log(f); // undefined (no le asignamos un valor)

// null
let g: null; // null (ausente)