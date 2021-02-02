//For use with https://docs.google.com/spreadsheets/d/1KoSBVUkW4B4njXJcKqPiqGcbicAN_YuJlLjWkECcsMY/edit#gid=967401050
//Run this in your browser console

function spreadsheetToTypeScript(rawText){
	//Hold the output
	var Result = {
		RawData: [],
		Classes: []
	};
	
	//Split up the data
	//Note - this will not handle line breaks within a cell without some additional tweaks
	var rows = rawText.trim().replace(/\r\n/g, "\n").split("\n");
	var columns = rows.shift().split("\t");
	
	//Read the data into objects
	rows.forEach(function(row){
		var data = {};
		var cells = row.split("\t");
		columns.forEach(function(column, index){
			data[column] = cells[index];
		});
		Result.RawData.push(data);
	});
	
	//Assemble the classes
	var currentClass = null;
	Result.RawData.forEach(function(Item){
		if(currentClass && currentClass.BroadType == Item.BroadType){
			currentClass.Properties.push(Item);
		}
		else{
			if(currentClass){
				Result.Classes.push(currentClass);
			}
			currentClass = {
				BroadType: Item.BroadType,
				Properties: [],
				TypeScript: [],
				TypeScriptRaw: ""
			};
			currentClass.Properties.push(Item);
		}
	});
	
	//Construct the TypeScript
	Result.Classes.forEach(function(RClass){
		RClass.TypeScript.push("interface " + RClass.BroadType + " {");
		RClass.Properties.forEach(function(Property){
			if(Property.Note && Property.Note.length > 0){
				RClass.TypeScript.push("\t" + "// " + Property.Note); 
			}
			RClass.TypeScript.push("\t" + Property.Property + ": " + (Property.Multi.toLowerCase() == "yes" ? "[" + Property.ValueType + ", ...];" : Property.ValueType + ";"));
		});
		RClass.TypeScript.push("}");
		RClass.TypeScriptRaw = RClass.TypeScript.join("\n");
	});
	
	//Output the data
	console.log(Result.Classes.map(m => m.TypeScriptRaw).join("\n\n"));
	
	return Result;
}
