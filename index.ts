import * as fs from "fs-extra"
import * as ejs from "ejs"
import * as argv from "yargs-parser"
import path from 'path'

const args = process.argv.slice(2)

const main = () => {

    console.log('Starting script...')

    const cognito = args[0]
    const data = {
      cognito,
    }
    const options = {}

    const filename = path.join(__dirname, "./main.ejs")

  try {
    console.log(args)

    ejs.renderFile(filename, data, options, function(err, str) {
      // str => Rendered HTML string
      if (err) {
        console.error(err)
      }

    const outputFile = path.join(process.cwd(), './template/example.tsx')

    fs.ensureFileSync(outputFile)

    fs.outputFileSync(outputFile, str)
    })

 

  } catch (err) {
    console.error(err)
  }
}

main()