let romanBoilerplate = [
    { romanFigure:"M",arabicNumber :1000},
    { romanFigure:"CM",arabicNumber:900},
    { romanFigure:"D",arabicNumber:500},
    { romanFigure:"CD",arabicNumber:400},
    { romanFigure:"C",arabicNumber:100},
    { romanFigure:"XC",arabicNumber:90},
    { romanFigure:"L",arabicNumber:50},
    { romanFigure:"XL",arabicNumber:40},
    { romanFigure:"X",arabicNumber:10},
    { romanFigure:"IX",arabicNumber:9},
    { romanFigure:"V",arabicNumber:5},
    { romanFigure:"IV",arabicNumber:4},
    { romanFigure:"I", arabicNumber:1}
    ]
    
    
    function converter(num){
        let roman = ''
        for(let i = 0; i < romanBoilerplate.length; i++){
            if(romanBoilerplate[i].arabicNumber <= num){
                num -= romanBoilerplate[i].arabicNumber
                roman += romanBoilerplate[i].romanFigure
                i--
            }
        }
        return roman;
    }
    
    
    
    
    