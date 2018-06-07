var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(element, arr) {
var arr=[];
var newArr = arr.unshift(element); return newArr; } 

function destructivelyAddElementToBeginningofArray(element, arr) {var arr=[];
  var element;
  arr.unshift(element);} 

function addElementToEndOfArray(element, arr){var arr=[];
var newPushArr = arr.push(element); return newPushArr;}  

function destructivelyAddElementToEndofArray(element, arr) {
  var arr=[];
  arr.push(element);} 

function accessElementInArray(arr, index) { return arr[index];}

function destructivelyRemoveElementFromBeginningOfArray(arr){return arr.shift();}

function removeElementFromBeginningOfArray(arr) {
  var Slice = arr.slice[1];
  return Slice; }
  
function destructivelyRemoveElementFromEndOfArray(arr) 
  {arr.pop();} 
  
function removeElementFromEndOfArray(arr) {
  newPopArr = arr.pop();
  return newPopArr ; } 
}
  