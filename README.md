# ![loading](./pics-check/prog-check-load.jpg)
# check-loading-prog

Version v1.0 </br>
Author : Imo999 </br>
Date : 04/07/2021 </br>

This program allows you to check your folders and files before launching your program.


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

  // #########################################################
  // #################### ERROR DIRECTORY ####################
  // #########################################################
  // E-DIR : Check si le dossier existe :                 
  // [1] pics 
  // [2] .... Addionnal 


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


  // ########################################################
  // #################### CHECK LINE CMD ####################
  // ########################################################
  // LINE CMD : Check si la commande de lancement est correct : 
  // [0] node 
  // [1] nom du programme.js
  // [2] argument 1 : run

  
  // #####################################################
  // #################### RUN LOADING ####################
  // #####################################################
  // LOADING : Affichage si tout est OK si l'argument 'RUN' est validé => ALL CHECK DONE !!!


  // #######################################################
  // #################### ARGUMENT RUN  ####################
  // #######################################################
  // ARG-RUN :  Si l'argument 1 n'est pas égale à 'run' alors ne pas démmarer !! 


  // ######################
  // ####### GO !!! #######
  // ######################

## Install

```console
$ yarn
$ yarn add chalk
```

## Usage

```console
- Full Screen
- node loading.js run
- ...
```

