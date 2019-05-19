/* JavaScript & jQuery - Chapter 3: Functions, Methods & Programming */
/* The book used a font called Eau Sans - the download examples use Open Sans */

@import url(http://fonts.googleapis.com/css?family=Open+Sans);

body {
  background-color: #fff;
  background: url("http://javascriptbook.com/code/c03/images/travelworthy-backdrop.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0;
  font-family: 'Open Sans', sans-serif;}

h1 {
  background: #1e1b1e url("data:image/gif;base64,R0lGODlh5gC0AMQAAKinqLW0tcnJyYiHiJiWmPT09Ovr6+Li4k1LTWtpazg2OHFwcfr6+tva2yckJ/7+/llXWdbW1nx6fB8cHyEeIcC/wGFgYYGAgS8tL0E+Qc/Pz56dntTT1I+Pj////x4bHiH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJFMjE2M0Y5QkEyNjExRTJBRDM5RUI1Q0RERTdEQUFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJFMjE2M0ZBQkEyNjExRTJBRDM5RUI1Q0RERTdEQUFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkUyMTYzRjdCQTI2MTFFMkFEMzlFQjVDRERFN0RBQUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkUyMTYzRjhCQTI2MTFFMkFEMzlFQjVDRERFN0RBQUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9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") no-repeat;
  width: 230px;
  height: 180px;
  float: left;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;}

h2 {
  margin: 1.75em 0 0 0;
  color: #adffda; 
  font-weight: normal;}

h2 + p {
  margin: 0.25em 0 0 0;}
p + p {
  margin: 0;}
p + h2 {
  margin: 10px 0 0 0;}

/* message under the logo */

#message {
  float: left;
  clear: left;
  background-color: #ffb87a;
  color: #1e1b1e;
  width:170px;
  padding: 18px 30px;
  text-align: center;}

/* black bar across the right hand side of the page */

#info {
  background-color: #1e1b1e;
  color: #fff;
  width: 200px;
  padding: 0 15px;
  text-align: center;
  min-height: 100%;
  position: absolute;
  top: 0;
  right: 15%;}

/* details in the black bar */

#hotelName {
  text-transform: uppercase;
  text-align: center; 
  font-size: 120%;
  margin-top: 10px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff; 
  padding: 10px 0;}

#hotel1 {
  margin-top: 1em; 
  border-top: 1px solid #fff; 
  padding-top: 1em;} 
#hotel2 {
  border-bottom: 1px solid #fff; 
  padding-bottom: 1em;}
#hotel3 {
  border-bottom: 1px solid #fff; 
  padding-bottom: 1em;}

#rooms {
  font-size: 440%;
  color: #ffb87a;
  display: inline-block;
  margin: 0;}

#roomRate{
  text-decoration: line-through;
  display: inline-block;
  float: left;
  padding-top: 10px;}

#specialRate {  
  font-size: 440%;
  color: #ffb87a;
  display: inline-block;
  padding: 10px 0 20px 0;
  margin: 0;}

#offerEnds {
  text-transform: uppercase;
  color: #ffb87a;
  font-size: 75%;}

.true, .false {
  padding: 0 50px 0 50px;
  line-height: 28px;
  text-align: left;
  background-image: url("../images/check-cross.png");
  background-position: 120px 0;
  background-repeat: no-repeat;}

.false {
  background-position: 120px -28px;}

/* footer */

#footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #adffda;}

#footer p {
  padding: 10px;
  margin: 0;}

.data {
  padding: 10px;}
