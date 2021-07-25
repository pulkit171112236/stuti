const path = './textFiles/shriramchandrakripalu.txt'
let text = ''

async function read(path) {
    const data = await fetch(path).then(response => response.text());
    const arr = data.split('\n\n')
    const title = arr[0]
    arr.shift();
    // console.log('title' + title)
    // console.log('arr' + arr)
    const obj = []
    for (let i = 0; i < arr.length; i++) {
        let verse = arr[i].split('\n')
        let first, second
        if (verse.length == 2) {
            first = verse[0].trim()
            second = verse[1].trim()
            obj.push({first, second})
        }
        else if (verse.length == 4) {
            first = verse[0].trim() + ' ' + verse[1].trim()
            second = verse[2].trim() + ' ' + verse[3].trim()
            obj.push({first, second})
        }
    }
    console.log(JSON.stringify(obj))
    console.log('------------------------------------------------------------------')
}
read(path)