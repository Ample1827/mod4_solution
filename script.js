var names=new Array();
names[0]="Adal";
names[1]="Romero";
names[2]="Panda";
names[3]="Wookie";
names[4]="Porky";
names[5]="monkey";
names[6]="Luara";
names[7]="Dave";
names[8]="Jan";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}