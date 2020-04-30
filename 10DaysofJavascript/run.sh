#!/usr/bin/env bash

RED='\033[0;31m';
NC='\033[0m'; # No Color
Cyan='\033[1;36m'; #Cyan
BLUE='\033[1;42m'; # Blue

root="${HOME}/git/hackerrank/10DaysofJavascript";

cd "${root}" || exit;
clear;

runAll=false;
runTest=true;
testName='Day2Loops';

if [ "$runAll" = true ]; then
for d in "${root}"/* ; do
    if [ -d "${d}" ]; then
    cd "${d}";
    echo "--------------------------------------------------------------------------";
    echo "${BLUE} ${PWD} ${NC}";
    echo "${NC} $(sh "${PWD}/compile.sh") ${NC}";
    echo "--------------------------------------------------------------------------";
    fi;
    cd "${root}";

done
fi

if [ "$runTest" = true ]; then
for d in "${root}"/* ; do
    if [ -d "${d}" ] && [ "${d}" == "${root}/${testName}" ]; then
    cd "${d}";
    echo "--------------------------------------------------------------------------";
    echo "${BLUE} ${PWD} ${NC}";
    echo "${NC} $(sh "${PWD}/compile.sh") ${NC}";
    echo "--------------------------------------------------------------------------";
    fi;
    cd "${root}";
done
fi

