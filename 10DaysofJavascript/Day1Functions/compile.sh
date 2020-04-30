#!/usr/bin/env bash

RED='\033[0;31m';
NC='\033[0m'; # No Color
Cyan='\033[1;36m'; #Cyan
BLUE='\033[1;42m'; # Blue

root="${PWD}";

cd "${root}" || exit;


#for d in "${root}"/* ; do
    if [ -f "index.js" ]; then
#    cd "${d}";
    echo "..............................................................................";
#    echo "${BLUE} ${(cat index.js)} ${NC}";
    echo "${Cyan} Question:$(cat "question.md")${NC}";
    echo "..............................................................................";
    echo "${RED} YourAnswer: $(cat "solution.js") ${NC}";
    echo "..............................................................................";
    for i in {1..5} ; do
    echo "${NC} $(sh "execute.sh" -p "$i") ${NC}";
    done

#    echo "${NC} HEAD  :${RED} $(git rev-parse --abbrev-ref HEAD) ${NC}";


#    git pull;
    echo "..............................................................................";
    fi;
#    cd "${..}";

#done