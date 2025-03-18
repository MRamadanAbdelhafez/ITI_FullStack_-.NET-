var Message = prompt("Enter Message to display heading tags");
console.log(Message);
document.writeln("<h2> Heading</h2>");
document.writeln("<hr>");
for (let headerNum = 1; headerNum <= 6; headerNum++) {
    document.writeln("<h"+headerNum+">"+Message+headerNum+"</h"+headerNum+">");
    
}