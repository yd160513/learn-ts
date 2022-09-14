type t = 'a'

type temp = {
    a: string,
    b: 'a' | 'b'
}

function abc(a: temp['b']) {

}

abc('a')

const a = {
    a: '123' as const
}

const A = {
    a: '123',
    b: '12222' as const
}
