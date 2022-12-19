let entry = document.querySelector('#Submit');
// let counder = 0;
let display = () => {
    if (entry.style.display != 'block') {
        entry.style.display = 'block';
    }
    else {
        entry.style.display = 'none';
    }
}

var DataofLocal = []
DataofLocal = JSON.parse(localStorage.getItem('Employee'));



function Unload() {
    let newdata = JSON.parse(localStorage.getItem("Employee"));
    newdata.forEach((element,D1) => {
        let Table = document.getElementsByTagName('tbody')[0];
        let IntRow = Table.insertRow(Table.length);
        IntRow.insertCell(0).innerHTML = element.EmployeeID;
        IntRow.insertCell(1).innerHTML = element.Namedata;
        IntRow.insertCell(2).innerHTML = element.Emaildata;
        IntRow.insertCell(3).innerHTML = element.Citydata;
        IntRow.insertCell(4).innerHTML = element.Action;
        IntRow.className = "rowno" + D1;
    });

}
function Calldata() {
    // For EmployeeID Number
    let Number1 = document.getElementById('Table').rows;
    // For Buttons
    for (let btn = 0; btn < Number1.length; btn++) {
        var Btn1 = '<button onClick="Select(this)">Edit</button>'
        var Btn2 = '<button onClick="Delete(this)" >Delete</button>'
        var Comb = Btn1 + Btn2;
    }
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var City = document.getElementById('city').value;
        var UID =  (new Date().getMilliseconds())
        var AllData = {
            EmployeeID: "#" + UID,
            Namedata: Name,
            Emaildata: Email,
            Citydata: City,
            Action: Comb
        }
    var flag = ""
    if (Name && Email && City) {
        flag = true;
    }
    if (flag) {
        
        if (localStorage.getItem("Employee") == null) {
            DataofLocal = []
            DataofLocal.push(AllData)
            localStorage.setItem("Employee", JSON.stringify(DataofLocal))
            let Table = document.getElementsByTagName('tbody')[0];
            let IntRow = Table.insertRow(Table.length);
            IntRow.insertCell(0).innerHTML = AllData.EmployeeID;
            IntRow.insertCell(1).innerHTML = AllData.Namedata;
            IntRow.insertCell(2).innerHTML = AllData.Emaildata;
            IntRow.insertCell(3).innerHTML = AllData.Citydata;
            IntRow.insertCell(4).innerHTML = AllData.Action;
            IntRow.className = "rowno" 
            location.reload();
        } 
        else{
            DataofLocal.push(AllData)
            localStorage.setItem("Employee", JSON.stringify(DataofLocal))
            let Table = document.getElementsByTagName('tbody')[0];
            let IntRow = Table.insertRow(Table.length);
            IntRow.insertCell(0).innerHTML = AllData.EmployeeID;
            IntRow.insertCell(1).innerHTML = AllData.Namedata;
            IntRow.insertCell(2).innerHTML = AllData.Emaildata;
            IntRow.insertCell(3).innerHTML = AllData.Citydata;
            IntRow.insertCell(4).innerHTML = AllData.Action;
            IntRow.className = "rowno"
            location.reload();
        }       
       
        document.getElementById('name').style.border = "none";
        document.getElementById('email').style.border = "none";
        document.getElementById('city').style.border = "none";
    }
    else {
        if (Name == "") {
            document.getElementById('name').style.border = "1px solid red";
        }
        else {
            document.getElementById('name').style.border = "none";
        }
        if (Email == "") {
            document.getElementById('email').style.border = "1px solid red";
        }
        else {
            document.getElementById('email').style.border = "none";
        }
        if (City == "") {
            document.getElementById('city').style.border = "1px solid red";
        }
        else {
            document.getElementById('city').style.border = "none";
        }

    }

}

let Select = (td) => {
    let Item = document.getElementById('div-of-Edit');
    if (Item.style.display != 'block') {
        Item.style.display = 'block';
    }
    SelectedRow = td.parentElement.parentElement;
    document.getElementById('Ename').value = SelectedRow.cells[1].innerHTML;
    document.getElementById('Eemail').value = SelectedRow.cells[2].innerHTML;
    document.getElementById('Ecity').value = SelectedRow.cells[3].innerHTML;
}
let Edited = () => {
    var updatedata = JSON.parse(localStorage.getItem("Employee"))
    let Editedname = document.getElementById('Ename').value;
    let Editedemail = document.getElementById('Eemail').value;
    let Editedcity = document.getElementById('Ecity').value;
    var required = SelectedRow.className;
    var del =  required.slice(5)  
    var flag2 = ""
    if (Editedname && Editedemail && Editedcity) {
        flag2 = true
    }
    if (flag2) {
        SelectedRow.cells[1].innerHTML = Editedname;
        SelectedRow.cells[2].innerHTML = Editedemail
        SelectedRow.cells[3].innerHTML = Editedcity
        
        updatedata[del].Namedata = Editedname
        updatedata[del].Emaildata = Editedemail
        updatedata[del].Citydata = Editedcity
               

        alert("Date has be upadted");
      
        localStorage.setItem("Employee",JSON.stringify(updatedata))

        document.getElementById('Ename').style.border = "none";
        document.getElementById('Eemail').style.border = "none";
        document.getElementById('Ecity').style.border = "none"

    }
    else {
        if (Editedname == "") {
            document.getElementById('Ename').style.border = "2px solid red";
        }
        else {
            document.getElementById('Ename').style.border = "none";
        }
        if (Editedemail == "") {
            document.getElementById('Eemail').style.border = "2px solid red";
        }
        else {
            document.getElementById('Eemail').style.border = "none";
        }
        if (Editedcity == "") {
            document.getElementById('Ecity').style.border = "2px solid red";
        }
        else {
            document.getElementById('Ecity').style.border = "none";
        }
    }
}
let Delete = (thisdata) => {
    
    if (confirm("Are You Sure You Wan't Delete Data")) {
        var pars = JSON.parse(localStorage.getItem("Employee"))
        SelectedRow = thisdata.parentElement.parentElement;
        var required = SelectedRow.className;
        var del =  required.slice(5)
        pars.splice(del,1)
        document.getElementById("Table").deleteRow(SelectedRow.rowIndex);
        localStorage.setItem("Employee", JSON.stringify(pars));

    }
}
let Close = () => {
    let change = document.getElementById('div-of-Edit');
    if (change.style.display != 'block') {
        change.style.display = 'block';
    }
    change.style.display = 'none';
}
