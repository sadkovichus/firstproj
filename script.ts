function mainFunction<T,N extends keyof T>(a: T, b: N) {
    console.log(true);
}

mainFunction({name: 'Alex'}, 'name');