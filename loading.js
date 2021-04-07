// prog-readfile.js
const fs = require('fs')
const chalk = require('chalk')


// ####################################################
// #              ARCHITECTURE CHECKLOADING           #
// ####################################################
// #                                                  #
// #                [1] ERROR DIRECTORY               #
// #                [2] ERROR FILE                    #
// #                [3] CHECK LINE CMD                #
// #                [4] RUN LOADING                   #
// #                [5] ARGUMENT RUN                  #
// #                                                  #
//#####################################################



const checkLoading = () => {

  // #########################################################
  // #################### ERROR DIRECTORY ####################
  // #########################################################
  // E-DIR : Check si le dossier existe :                 
  // [1] pics 
  // [2] .... Addionnal 

  // [1]pics
  if (!fs.existsSync('./pics-check')) {
    console.clear() // Clear affichage
    console.log(chalk.red(`\nError E-DIR[1] : 'pics' folder doesn't exist\n`)) // affichage error
    process.exit(1) // E-DIR : Exit
  }
  // [2]....Addionnal 

  // ####################################################
  // #################### ERROR FILE ####################
  // ####################################################
  // E-FILE : Check si les fichiers existe et qu'ils ne sont pas des répertoires
  // [1] e-not-exist.txt
  // [2] e-note-file.txt
  // [3] usage-node.txt
  // [4] use-run-arg.txt
  // [5] loading-pic.txt
  // [6] all-check-done.txt
  // [7].... Addionnal 
  // ########                                         

  // [1] e-not-exist.txt
  if (!fs.existsSync('./pics-check/e-not-exist.txt')) {
    console.clear() // Clear affichage
    console.log(chalk.red(`\nError E-FILE[1] : 'e-not-exist.txt' file doesn't exist\n`)) // affichage error
    process.exit(1) // E-FILE : Exit
  }
  // [2] e-note-file.txt
  if (!fs.existsSync('./pics-check/e-not-file.txt')) {
    console.clear() // Clear affichage
    console.log(chalk.red(`\nError E-FILE[2] : 'e-not-file.txt' file doesn't exist\n`)) // affichage error
    process.exit(1) // E-FILE : Exit
  }
  // [3] usage-node.txt
  if (!fs.existsSync('./pics-check/usage-node.txt',)) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8')) // lit le fichier e-not-exist.txt
    console.clear() // Clear affichage
    console.log(enotExist) // affichage Error du fichier : e-not-exit.txt
    console.log(chalk.red(`\nError E-FILE[3] : 'usage-node.txt' file doesn't exist\n`)) // affichage error
    process.exit(1) // E-FILE : Exit
  }
  // [4] use-run-arg.txt
  if (!fs.existsSync('./pics-check/use-run-arg.txt')) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8')) // lit le fichier e-not-exist.txt
    console.clear() // Clear affichage
    console.log(enotExist) // affichage Error du fichier : e-not-exit.txt
    console.log(chalk.red(`\nError E-FILE[4] : 'use-run-arg.txt' file doesn't exist\n`)) // affichage error
    process.exit(1) // E-FILE : Exit
  }
  // [5] loading-pic.txt
  if (!fs.existsSync('./pics-check/loading-pic.txt')) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8')) // lit le fichier e-not-exist.txt
    console.clear() // Clear affichage
    console.log(enotExist) // affichage Error du fichier : e-not-exit.txt
    console.log(chalk.red(`\nError E-FILE[5] : 'loading-pic.txt' file doesn't exist\n`)) // affichage error
    process.exit(1) // E-FILE : Exit
  }
  // [6] all-check-done.txt 
  if (!fs.existsSync('./pics-check/all-check-ok.txt')) {
    let enotExist = chalk.red(fs.readFileSync('./pics-check/e-not-exist.txt', 'utf-8')) // lit le fichier e-not-exist.txt
    console.clear() // Clear affichage
    console.log(enotExist) // affichage Error du fichier : e-not-exit.txt
    console.log(chalk.red(`\nError E-FILE[6] : 'all-check-ok.txt' file doesn't exist\n`)) // affichage error
    process.exit(1) // E-FILE : Exit
  }

  // [7].... Addionnal 

  // ########################################################
  // #################### CHECK LINE CMD ####################
  // ########################################################
  // LINE CMD : Check si la commande de lancement est correct : 
  // [0] node 
  // [1] nom du programme.js
  // [2] argument 1 : run

  // LINE-CMD : Check start
  if (process.argv.length !== 3) { // 1 argument : run
    const lineCmd = fs.readFileSync('./pics-check/usage-node.txt', 'utf-8') // lit le fichier usage-node.txt
    console.clear() // Clear affichage
    console.log(chalk.yellow(lineCmd)) // affichage du fichier 
    process.exit(1) // LINE-CMD : Exit
  }

  // #####################################################
  // #################### RUN LOADING ####################
  // #####################################################
  // LOADING : Affichage si tout est OK si l'argument 'RUN' est validé => ALL CHECK DONE !!!

  // LOADING : Start 
  if (process.argv[2] === 'run') {
    console.clear() // Clear affichage
    const loading = fs.readFileSync('./pics-check/loading-pic.txt', 'utf-8') // lit le fichier loading-pic.txt
    let allcheckOk = fs.readFileSync('./pics-check/all-check-ok.txt', 'utf-8')
    console.log(loading.repeat(6000)) // répétition du fichier loading-pic.txt
    console.clear() // Clear affichage
    console.log(chalk.green(allcheckOk)) // Affichage répétition du fichier all-check-ok.txt
    console.log(chalk.green('\nVersions: PROG-CHECK-LOAD \n\t1.0 --- 04/07/2021 = CHECK by Imo999 : ALL IS GOOD')) //Suivit de versionning 
    console.log(chalk.green('\t2.0 --- Coming Soon\n')) // Additionnal 
    //console.log(chalk.green('\t2.0 --- xx/xx/xxxx = CHECK by xxxx : Additionnal\n')) // Additionnal 

    // =====================================================
    // ===============>                     <===============
    // ===============> POINT D'INTEGRATION <===============
    // ===============>                     <===============
    // =====================================================

    process.exit(1) // LOADING : Exit à supprimer lors de l'intégration
  }

  // #######################################################
  // #################### ARGUMENT RUN  ####################
  // #######################################################
  // ARG-RUN :  Si l'argument 1 n'est pas égale à 'run' alors ne pas démmarer !! 

  // ARG-RUN : Start
  else {
    const useRun = chalk.red(fs.readFileSync('./pics-check/use-run-arg.txt', 'utf-8')) // lit le fichier use-run-arg.txt
    console.clear() // Clear affichage
    console.log(useRun) // affichage du fichier
    process.exit(1) // ARG-RUN : Exit
  }
}

// ######################
// ####### GO !!! #######
// ######################

checkLoading() // Lancement du programme !!! 