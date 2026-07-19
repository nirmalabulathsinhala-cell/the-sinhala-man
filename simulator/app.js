// Sinhala FM Font Helper - Simulator Engine

// 1. FMAbhaya Converter Class (Mirror of the Swift implementation)
const FMAbhayaConverter = {
    convert(text) {
        let output = text;
        for (const [target, replacement] of this.mappings) {
            // Sequential literal replacements
            output = output.replaceAll(target, replacement);
        }
        return output;
    },
    
    // Order-sensitive mappings list (identical to Swift and UCSC script)
    mappings: [
        ["ද්‍ර", "ø"],
        [",", "￦"],
        ["'", "z"],
        ["(", "^"],
        [")", "&"],
        ["%", "]"],
        ["/", "$"],
        ["–", "-"],
        ["?", "@"],
        ["!", "æ"],
        ["=", "}"],
        [".", "'"],
        ["+", "¬"],
        [":", "("],
        ["÷", "­"],
        [";", "¦"],
        ["ත්‍රෛ", "ff;%"],
        ["ශෛ", "ffY"],
        ["චෛ", "ffp"],
        ["ජෛ", "ffc"],
        ["කෛ", "ffl"],
        ["මෛ", "ffu"],
        ["පෛ", "ffm"],
        ["දෛ", "ffo"],
        ["තෛ", "ff;"],
        ["නෛ", "ffk"],
        ["ධෛ", "ffO"],
        ["වෛ", "ffj"],
        ["ප්‍රෞ", "fm%!"],
        ["ෂ්‍යෝ", "fIHda"],
        ["ඡ්‍යෝ", "fPHda"],
        ["ඪ්‍යෝ", "fVHda"],
        ["ඝ්‍යෝ", "f>Hda"],
        ["ඛ්‍යෝ", "fLHda"],
        ["ළ්‍යෝ", "f<Hda"],
        ["ඵ්‍යෝ", "fMHda"],
        ["ඨ්‍යෝ", "fGHda"],
        ["ශ්‍යෝ", "fYHda"],
        ["ක්‍ෂ්‍යෝ", "fÌHda"],
        ["බ්‍යෝ", "fnHda"],
        ["ච්‍යෝ", "fpHda"],
        ["ඩ්‍යෝ", "fâHda"],
        ["ෆ්‍යෝ", "f*Hda"],
        ["ග්‍යෝ", "f.Hda"],
        ["ජ්‍යෝ", "fcHda"],
        ["ක්‍යෝ", "flHda"],
        ["ල්‍යෝ", "f,Hda"],
        ["ම්‍යෝ", "fuHda"],
        ["න්‍යෝ", "fkHda"],
        ["ප්‍යෝ", "fmHda"],
        ["ද්‍යෝ", "foHda"],
        ["ස්‍යෝ", "fiHda"],
        ["ට්‍යෝ", "fgHda"],
        ["ව්‍යෝ", "fjHda"],
        ["ත්‍යෝ", "f;Hda"],
        ["භ්‍යෝ", "fNHda"],
        ["ධ්‍යෝ", "fOHda"],
        ["ථ්‍යෝ", "f:Hda"],
        ["ෂ්‍යො", "fIHd"],
        ["ශ්‍යො", "fYHd"],
        ["ඛ්‍යො", "fLHd"],
        ["ක්‍ෂ්‍යො", "fÌHd"],
        ["බ්‍යො", "fnHd"],
        ["ව්‍යො", "fjHd"],
        ["ඩ්‍යො", "fvHd"],
        ["ෆ්‍යො", "f*Hd"],
        ["ග්‍යො", "f.Hd"],
        ["ජ්‍යො", "fcHd"],
        ["ක්‍යො", "flHd"],
        ["ම්‍යො", "fuHd"],
        ["ප්‍යො", "fmHd"],
        ["ද්‍යො", "foHd"],
        ["ස්‍යො", "fiHd"],
        ["ට්‍යො", "fgHd"],
        ["ව්‍යො", "fjHd"],
        ["ත්‍යො", "f;Hd"],
        ["භ්‍යො", "fNHd"],
        ["ධ්‍යො", "fOHd"],
        ["ථ්‍යො", "f:Hd"],
        ["ෂ්‍යෙ", "fIH"],
        ["ඡ්‍යෙ", "fPH"],
        ["ළ්‍යෙ", "f<H"],
        ["ණ්‍යෙ", "fKH"],
        ["ච්‍යෙ", "fpH"],
        ["ල්‍යෙ", "f,H"],
        ["න්‍යෙ", "fkH"],
        ["ශ්‍යෙ", "fYH"],
        ["ඛ්‍යෙ", "fLH"],
        ["ක්‍ෂ්යෙ", "fÌH"],
        ["බ්‍යෙ", "fnH"],
        ["ඩ්‍යෙ", "fvH"],
        ["ෆ්‍යෙ", "f*H"],
        ["ග්‍යෙ", "f.H"],
        ["ජ්‍යෙ", "fcH"],
        ["ක්‍යෙ", "flH"],
        ["ම්‍යෙ", "fuH"],
        ["ප්‍යෙ", "fmH"],
        ["ද්‍යෙ", "foH"],
        ["ස්‍යෙ", "fiH"],
        ["ට්‍යෙ", "fgH"],
        ["ව්‍යෙ", "fjH"],
        ["ත්‍යෙ", "f;H"],
        ["භ්‍යෙ", "fNH"],
        ["ධ්‍යෙ", "fOH"],
        ["ථ්‍යෙ", "f:H"],
        ["ෂ්‍රෝ", "fI%da"],
        ["ඝ්‍රෝ", "f>%da"],
        ["ශ්‍රෝ", "fY%da"],
        ["ක්‍ෂ්‍රෝ", "fÌ%da"],
        ["බ්‍රෝ", "fn%da"],
        ["ඩ්‍රෝ", "fv%da"],
        ["ෆ්‍රෝ", "f*%da"],
        ["ග්‍රෝ", "f.%da"],
        ["ක්‍රෝ", "fl%da"],
        ["ප්‍රෝ", "fm%da"],
        ["ද්‍රෝ", "føda"],
        ["ස්‍රෝ", "fi%da"],
        ["ට්‍රෝ", "fg%da"],
        ["ත්‍රෝ", "f;%da"],
        ["ශ්‍රො", "fY%d"],
        ["ඩ්‍රො", "fv%d"],
        ["ෆ්‍රො", "f*%d"],
        ["ග්‍රො", "f.%d"],
        ["ක්‍රො", "fl%d"],
        ["ප්‍රො", "fm%d"],
        ["ද්‍රො", "fød"],
        ["ස්‍රො", "fi%d"],
        ["ට්‍රො", "fg%d"],
        ["ත්‍රො", "f;%d"],
        ["ශ්‍රේ", "fYa"],
        ["බ්‍රේ", "fí%"],
        ["ඩ්‍රේ", "fâ%"],
        ["ෆ්‍රේ", "f*a%"],
        ["ග්‍රේ", "f.a%"],
        ["ක්‍රේ", "fla%"],
        ["ප්‍රේ", "fma%"],
        ["ද්‍රේ", "føa"],
        ["ස්‍රේ", "fia%"],
        ["ත්‍රේ", "f;a%"],
        ["ධ්‍රේ", "fè%"],
        ["ෂ්‍රෙ", "fI%"],
        ["ශ්‍රෙ", "fY%"],
        ["බ්‍රෙ", "fn%"],
        ["ෆ්‍රෙ", "f*%"],
        ["ග්‍රෙ", "f.%"],
        ["ක්‍රෙ", "fl%"],
        ["ප්‍රෙ", "fm%"],
        ["ද්‍රෙ", "fø"],
        ["ස්‍රෙ", "fi%"],
        ["ත්‍රෙ", "f;%"],
        ["භ්‍රෙ", "fN%"],
        ["ධ්‍රෙ", "fO%"],
        ["්‍ය", "H"],
        ["බ්‍රි", "ì%"],
        ["්‍ර", "%"],
        ["ෂෞ", "fI!"],
        ["ඡෞ", "fP!"],
        ["ශෞ", "fY!"],
        ["බෞ", "fn!"],
        ["චෞ", "fp!"],
        ["ඩෞ", "fv!"],
        ["ෆෞ", "f*!"],
        ["ගෞ", "f.!"],
        ["ජෞ", "fc!"],
        ["කෞ", "fl!"],
        ["ලෞ", "f,!"],
        ["මෞ", "fu!"],
        ["නෞ", "fk!"],
        ["පෞ", "fm!"],
        ["දෞ", "fo!"],
        ["රෞ", "fr!"],
        ["සෞ", "fi!"],
        ["ටෞ", "fg!"],
        ["තෞ", "f;!"],
        ["භෞ", "fN!"],
        ["ඤෞ", "f[!"],
        ["ෂෝ", "fIda"],
        ["ඹෝ", "fUda"],
        ["ඡෝ", "fPda"],
        ["ඪෝ", "fVda"],
        ["ඝෝ", "f>da"],
        ["ඛෝ", "fLda"],
        ["ළෝ", "f<da"],
        ["ඟෝ", "fÛda"],
        ["ණෝ", "fKda"],
        ["ඵෝ", "fMda"],
        ["ඨෝ", "fGda"],
        ["ඬෝ", "f~da"],
        ["ශෝ", "fYda"],
        ["ඥෝ", "f{da"],
        ["ඳෝ", "f|da"],
        ["ක්‍ෂෝ", "fÌda"],
        ["බෝ", "fnda"],
        ["චෝ", "fpda"],
        ["ඩෝ", "fvda"],
        ["ෆෝ", "f*da"],
        ["ගෝ", "f.da"],
        ["හෝ", "fyda"],
        ["ජෝ", "fcda"],
        ["කෝ", "flda"],
        ["ලෝ", "f,da"],
        ["මෝ", "fuda"],
        ["නෝ", "fkda"],
        ["පෝ", "fmda"],
        ["දෝ", "foda"],
        ["රෝ", "frda"],
        ["සෝ", "fida"],
        ["ටෝ", "fgda"],
        ["වෝ", "fjda"],
        ["තෝ", "f;da"],
        ["භෝ", "fNda"],
        ["යෝ", "fhda"],
        ["ඤෝ", "f[da"],
        ["ධෝ", "fOda"],
        ["ථෝ", "f:da"],
        ["ෂො", "fId"],
        ["ඹො", "fUd"],
        ["ඡො", "fPd"],
        ["ඪො", "fVd"],
        ["ඝො", "f>d"],
        ["ඛො", "fLd"],
        ["ළො", "f<d"],
        ["ඟො", "fÕd"],
        ["ණො", "fKd"],
        ["ඵො", "fMd"],
        ["ඨො", "fGd"],
        ["ඬො", "f~da"],
        ["ශො", "fYd"],
        ["ඥො", "f{d"],
        ["ඳො", "f|d"],
        ["ක්‍ෂො", "fÌd"],
        ["බො", "fnd"],
        ["චො", "fpd"],
        ["ඩො", "fvd"],
        ["ෆො", "f*d"],
        ["ගො", "f.d"],
        ["හො", "fyd"],
        ["ජො", "fcd"],
        ["කො", "fld"],
        ["ලො", "f,d"],
        ["මො", "fud"],
        ["නො", "fkd"],
        ["පො", "fmd"],
        ["දො", "fod"],
        ["රො", "frd"],
        ["සො", "fid"],
        ["ටො", "fgd"],
        ["වො", "fjd"],
        ["තො", "f;d"],
        ["භො", "fNd"],
        ["යො", "fhd"],
        ["ඤො", "f[d"],
        ["ධො", "fOd"],
        ["ථො", "f:d"],
        ["ෂේ", "fIa"],
        ["ඹේ", "fò"],
        ["ඡේ", "fþ"],
        ["ඪේ", "fa"],
        ["ඝේ", "f>a"],
        ["ඛේ", "fÄ"],
        ["ළේ", "f<a"],
        ["ගේ", "f.a"],
        ["ඟේ", "fÕa"],
        ["ණේ", "fKa"],
        ["ඵේ", "fMa"],
        ["ඨේ", "fGa"],
        ["ඬේ", "få"],
        ["ශේ", "fYa"],
        ["ඥේ", "f{a"],
        ["ඳේ", "f|a"],
        ["ක්‍ෂේ", "fÌa"],
        ["බේ", "fí"],
        ["චේ", "fÉ"],
        ["ඩේ", "fâ"],
        ["ෆේ", "f*"],
        ["ගේ", "f.a"],
        ["හේ", "fya"],
        ["පේ", "fma"],
        ["කේ", "fla"],
        ["ලේ", "f,a"],
        ["මේ", "fï"],
        ["නේ", "fka"],
        ["ජේ", "fÊ"],
        ["දේ", "foa"],
        ["රේ", "f¾"],
        ["සේ", "fia"],
        ["ටේ", "fÜ"],
        ["වේ", "fõ"],
        ["තේ", "f;a"],
        ["භේ", "fNa"],
        ["යේ", "fha"],
        ["ඤේ", "f[a"],
        ["ධේ", "fè"],
        ["ථේ", "f:a"],
        ["ෂෙ", "fI"],
        ["ඹෙ", "fU"],
        ["ඓ", "ft"],
        ["ඡෙ", "fP"],
        ["ඪෙ", "fV"],
        ["ඝෙ", "f>"],
        ["ඛෙ", "fn"],
        ["ළෙ", "f<"],
        ["ඟෙ", "fÛ"],
        ["ණෙ", "fK"],
        ["ඵෙ", "fM"],
        ["ඨෙ", "fG"],
        ["ඬෙ", "f~"],
        ["ශෙ", "fY"],
        ["ඥෙ", "f{"],
        ["ඳෙ", "f​|"],
        ["ක්‍ෂෙ", "fÌ"],
        ["බෙ", "fn"],
        ["චෙ", "fp"],
        ["ඩෙ", "fv"],
        ["ෆෙ", "f*"],
        ["ගෙ", "f."],
        ["හෙ", "fy"],
        ["ජෙ", "fc"],
        ["කෙ", "fl"],
        ["ලෙ", "f,"],
        ["මෙ", "fu"],
        ["නෙ", "fk"],
        ["පෙ", "fm"],
        ["දෙ", "fo"],
        ["රෙ", "fr"],
        ["සෙ", "fi"],
        ["ටෙ", "fg"],
        ["වෙ", "fj"],
        ["තෙ", "f;"],
        ["භෙ", "fN"],
        ["යෙ", "fh"],
        ["ඤෙ", "f["],
        ["ධෙ", "fO"],
        ["ථෙ", "f:"],
        ["තු", ";="],
        ["ශු", "Y="],
        ["භු", "N="],
        ["ගු", ".="],
        ["කු", "l="],
        ["තූ", ";+"],
        ["ශූ", "Y+"],
        ["භූ", "N+"],
        ["ගූ", ".+"],
        ["කූ", "l+"],
        ["රු", "re"],
        ["රූ", "rE"],
        ["ආ", "wd"],
        ["ඇ", "we"],
        ["ඈ", "wE"],
        ["ඌ", "W!"],
        ["ඖ", "T!"],
        ["ඒ", "ta"],
        ["ඕ", "´"],
        ["ඳි", "¢"],
        ["ඳී", "£"],
        ["දූ", "¥"],
        ["දී", "§"],
        ["ලූ", "Æ"],
        ["ර්‍ය", "©"],
        ["ඳූ", "ª"],
        ["ර්", "¾"],
        ["ඨි", "À"],
        ["ඨී", "Á"],
        ["ඡී", "Â"],
        ["ඛ්", "Ä"],
        ["ඛි", "Å"],
        ["ලු", "¨"],
        ["ඛී", "Ç"],
        ["දි", "È"],
        ["ච්", "É"],
        ["ජ්", "Ê"],
        ["රී", "Í"],
        ["ඪී", "Î"],
        ["ඪී", "Ð,"],
        ["චි", "Ñ"],
        ["ථී", "Ò"],
        ["ථී", "Ó"],
        ["ජී", "Ô"],
        ["චී", "Ö"],
        ["ඞ්", "Ù"],
        ["ඵී", "Ú"],
        ["ට්", "Ü"],
        ["ඵි", "Ý"],
        ["රි", "ß"],
        ["ටී", "à"],
        ["ටි", "á"],
        ["ඩ්", "â"],
        ["ඩී", "ã"],
        ["ඩි", "ä"],
        ["ඬ්", "å"],
        ["ඬි", "ç"],
        ["ධ්", "è"],
        ["ඬී", "é"],
        ["ධි", "ê"],
        ["ධී", "ë"],
        ["ථි", "Ó"],
        ["බි", "ì"],
        ["බ්", "í"],
        ["බී", "î"],
        ["ම්", "ï"],
        ["ජි", "ð"],
        ["මි", "ñ"],
        ["ඹ්", "ò"],
        ["මී", "ó"],
        ["ඹි", "ô"],
        ["ව්", "õ"],
        ["ඹී", "ö"],
        ["ඳු", "÷"],
        ["වී", "ù"],
        ["ඟු", "Õ=‍"],
        ["වි", "ú"],
        ["ඞ්", "û"],
        ["ඞී", "ü"],
        ["ඡි", "ý"],
        ["ඡ්", "þ"],
        ["දු", "ÿ"],
        ["ර්‍ණ", "“"],
        ["ණී", "Œ"],
        ["ණි", "‚"],
        ["ජී", "Ô"],
        ["ඡි", "ð"],
        ["ඩි", "ä"],
        ["ඤු", "û"],
        ["ග", "."],
        ["ළු", "¿"],
        ["ශ", "Y"],
        ["ෂ", "I"],
        ["ං", "x"],
        ["ඃ", "#"],
        ["ඹ", "U"],
        ["ඡ", "P"],
        ["ඪ", "V"],
        ["ඝ", ">"],
        ["ඊ", "B"],
        ["ඣ", "CO"],
        ["ඛ", "L"],
        ["ළ", "<"],
        ["ඟ", "Õ"],
        ["ණ", "K"],
        ["ඵ", "M"],
        ["ඨ", "G"],
        ["ඃ", "#"],
        ["\"", "˜‍"],
        ["÷", "­"],
        ["ෆ", "*"],
        ["ල", ","],
        ["රැ", "/"],
        ["ථ", ":"],
        ["ත", ";"],
        ["ළ", "<"],
        ["ඝ", ">"],
        ["රෑ", "?"],
        ["ක‍", "C"],
        ["‍ෘ", "D"],
        ["ෑ", "E"],
        ["ත‍", "F"],
        ["ඨ", "G"],
        ["්‍ය", "H"],
        ["ෂ", "I"],
        ["ඬ", "~"],
        ["න‍", "J"],
        ["ණ", "K"],
        ["ඛ", "L"],
        ["ඵ", "M"],
        ["භ", "N"],
        ["ධ", "O"],
        ["ඡ", "P"],
        ["ඍ", "R"],
        ["ඔ", "T"],
        ["ඹ", "U"],
        ["ඪ", "V"],
        ["උ", "W"],
        ["ශ", "Y"],
        ["ඤ", "["],
        ["ඉ", "b"],
        ["ජ", "c"],
        ["ට", "g"],
        ["ය", "h"],
        ["ස", "i"],
        ["ව", "j"],
        ["න", "k"],
        ["ක", "l"],
        ["ප", "m"],
        ["බ", "n"],
        ["ද", "o"],
        ["ච", "p"],
        ["ර", "r"],
        ["එ", "t"],
        ["ම", "u"],
        ["ඩ", "v"],
        ["අ", "w"],
        ["හ", "y"],
        ["ඥ", "{"],
        ["ඳ", "|"],
        ["ක්‍ෂ", "Ì"],
        ["ැ", "e"],
        ["ෑ", "E"],
        ["ෙ", "f"],
        ["ු", "q"],
        ["ි", "s"],
        ["ූ", "Q"],
        ["ී", "S"],
        ["ෘ", "D"],
        ["%22", "\""],
        ["%26", "&"],
        ["%27", "'"],
        ["%28", "("],
        ["%29", ")"],
        ["%2b", "+"],
        ["%2c", ","],
        ["%2f", "/"],
        ["%3a", ":"],
        ["%3b", ";"],
        ["%3d", "="],
        ["%3f", "?"],
        ["%7b", "{"],
        ["%7d", "}"],
        ["ෲ", "DD"],
        ["ෟ", "!"],
        ["ා", "d"],
        ["්", "a"],
        ["￦", "\""],
        ["￫", "^"],
        ["￩", "&"],
        ["ￔ", ")"],
        ["ￓ", "@"],
        ["ￒ", "`"],
        ["ￏ", "}"],
        ["ￎ", "'"],
        ["ￍ", "¤"],
        ["ￌ", "•"],
        ["ￊ", "›"],
        ["ﾶ", "∙"],
        ["ￕ", "]"],
        ["ඏ", "Ì"],
        ["ඐ", "Ï"],
        ["ඦ", "`c"],
        ["“", "—"],
        ["”", "˜"],
        ["`ca", "`Ê"],
        ["`cs", "`ð"]
    ],
    
    // Direct QWERTY typing support
    convertQwertyToFM(input) {
        let output = "";
        let i = 0;
        const chars = Array.from(input);
        
        while (i < chars.length) {
            const char = chars[i];
            
            // Check if character is a consonant
            if (this.qwertyConsonants.has(char)) {
                let suffix = "";
                let nextIndex = i + 1;
                
                // Check if followed by rakaransaya (%) or yansaya (H)
                if (nextIndex < chars.length && (chars[nextIndex] === "%" || chars[nextIndex] === "H")) {
                    suffix = chars[nextIndex];
                    nextIndex++;
                }
                
                // Check if followed by kombuwa (f)
                if (nextIndex < chars.length && chars[nextIndex] === "f") {
                    // Check if double kombuwa (ff)
                    if (nextIndex + 1 < chars.length && chars[nextIndex + 1] === "f") {
                        output += "ff" + char + suffix;
                        i = nextIndex + 2;
                    } else {
                        output += "f" + char + suffix;
                        i = nextIndex + 1;
                    }
                } else {
                    output += char + suffix;
                    i = nextIndex;
                }
            } else {
                output += char;
                i++;
            }
        }
        
        // Apply two-character ligature substitutions
        let finalOutput = output;
        for (const [target, replacement] of this.qwertyLigatures) {
            finalOutput = finalOutput.replaceAll(target, replacement);
        }
        
        return finalOutput;
    },
    
    qwertyConsonants: new Set([
        "l", ".", "p", "c", "g", "v", "K", ";", "o", "O", "k", "m", "n", "N", "u", "h",
        "r", ",", "j", "Y", "I", "i", "y", "<", "*", "Õ", "~", "|", "{", "P", "V", ">",
        "L", "M", "G", "U", "[", "Ì"
    ]),
    
    qwertyLigatures: [
        // order is important
        ["os", "È"],  // ද + ි -> දි
        ["oS", "§"],  // ද + ී -> දී
        ["rs", "ß"],  // ර + ි -> රි
        ["rS", "Í"],  // ර + ී -> රී
        ["ps", "Ñ"],  // ච + ි -> චි
        ["pS", "Ö"],  // ච + ී -> චී
        ["cs", "ð"],  // ජ + ි -> ජි
        ["cS", "Ô"],  // ජ + ී -> ජී
        ["gs", "á"],  // ට + ි -> ටි
        ["gS", "à"],  // ට + ී -> ටී
        ["vs", "ä"],  // ඩ + ි -> ඩි
        ["vS", "ã"],  // ඩ + ී -> ඩී
        ["~s", "ç"],  // ඬ + ි -> ඬි
        ["~S", "é"],  // ඬ + ී -> ඬී
        ["Os", "ê"],  // ධ + ි -> ධි
        ["OS", "ë"],  // ධ + ී -> ධී
        ["ns", "ì"],  // බ + ි -> බි
        ["nS", "î"],  // බ + ී -> බී
        ["us", "ñ"],  // ම + ි -> මි
        ["uS", "ó"],  // ම + ී -> මී
        ["js", "ú"],  // ව + ි -> වි
        ["jS", "ù"],  // ව + ී -> වී
        ["Ks", "‚"],  // ණ + i -> ණි
        ["KS", "Œ"],  // ණ + I -> ණී
        ["|s", "¢"],  // ඳ + ි -> ඳි
        ["|S", "£"],  // ඳ + ී -> ඳී
        ["Ps", "ý"],  // ඡ + ි -> ඡි
        ["PS", "Â"],  // ඡ + ී -> ඡී
        ["Ms", "Ý"],  // ඵ + ි -> ඵි
        ["MS", "Ú"],  // ඵ + ී -> ඵී
        ["Gs", "À"],  // ඨ + ි -> ඨි
        ["GS", "Á"],  // ඨ + ී -> ඨී
        ["LQ", "¿"],  // ළ + ු -> ළු
        ["Lq", "¿"],  // ළ + ු -> ළු
        ["Us", "ô"],  // ඹ + ි -> ඹි
        ["US", "ö"],  // ඹ + ී -> ඹී
        ["VS", "Î"],  // ඪ + ී -> ඪී
        
        // Papili
        ["oq", "ÿ"],  // ද + ු -> දු
        ["oQ", "¥"],  // ද + ූ -> දූ
        [",q", "¨"],  // ල + ු -> ලු
        [",Q", "Æ"],  // ල + ූ -> ලූ
        ["|q", "÷"],  // ඳ + ු -> ඳු
        ["|Q", "ª"],  // ඳ + ූ -> ඳූ
        ["<q", "¿"],  // ළ + ු -> ළු
        ["re", "/"],  // ර + ැ -> රැ
        ["rE", "?"],  // ර + ෑ -> රෑ
        
        // Al-lakuna
        ["na", "í"],  // බ + ් -> බ්
        ["ua", "ï"],  // ම + ් -> ම්
        ["pa", "É"],  // ච + ් -> ච්
        ["ca", "Ê"],  // ජ + ් -> ජ්
        ["ga", "Ü"],  // ට + ් -> ට්
        ["va", "â"],  // ඩ + ් -> ඩ්
        ["~a", "å"],  // ඬ + ් -> ඬ්
        ["Oa", "è"],  // ධ + ් -> ධ්
        ["ja", "õ"],  // ව + ් -> ව්
        ["Pa", "þ"],  // ඡ + ් -> ඡ්
        ["L", "<"],   // ළ -> <
        ["ra", "¾"],  // ර + ් -> ර්
        ["Ua", "ò"],  // ඹ + ් -> ඹ්
        
        // Custom papilla shapes
        [";q", ";="],  // ත + ු -> තු
        ["Yq", "Y="],  // ශ + ු -> ශු
        ["Nq", "N="],  // භ + ු -> භු
        [".q", ".="],  // ග + ු -> ගු
        ["lq", "l="],  // ක + ු -> කු
        [";Q", ";+"],  // ත + ූ -> තූ
        ["YQ", "Y+"],  // ශ + ූ -> ශූ
        ["NQ", "N+"],  // භ + ූ -> භූ
        [".Q", ".+"],  // ග + ූ -> ගූ
        ["lQ", "l+"],  // ක + ූ -> කූ
        ["rq", "re"],  // ර + ු -> රු
        ["rQ", "rE"]   // ර + ූ -> රූ
    ]
};

// 2. Simulator State Manager
class Simulator {
    constructor() {
        this.mode = "qwerty"; // default mode
        this.currentBuffer = "";
        this.previousInputText = "";
        
        // DOM elements
        this.activityLogEl = document.getElementById("activity-log");
        this.bufferStateEl = document.getElementById("state-buffer");
        this.asciiStateEl = document.getElementById("state-ascii");
        this.unicodePreviewEl = document.getElementById("unicode-preview");
        this.fmPreviewEl = document.getElementById("fm-preview");
        this.inputEl = document.getElementById("unicode-input");
        this.clearLogsBtn = document.getElementById("clear-logs-btn");
        this.qwertyBtn = document.getElementById("mode-qwerty-btn");
        this.unicodeBtn = document.getElementById("mode-unicode-btn");

        this.setupEventListeners();
        this.updateLabels();
    }

    setupEventListeners() {
        this.inputEl.addEventListener("input", (e) => this.handleInput(e));
        this.clearLogsBtn.addEventListener("click", () => this.clearLogs());
        
        this.qwertyBtn.addEventListener("click", () => this.setMode("qwerty"));
        this.unicodeBtn.addEventListener("click", () => this.setMode("unicode"));
    }

    setMode(mode) {
        if (this.mode === mode) return;
        this.mode = mode;
        this.currentBuffer = "";
        this.previousInputText = "";
        this.inputEl.value = "";
        
        // Toggle active button state
        if (mode === "qwerty") {
            this.qwertyBtn.classList.add("active");
            this.unicodeBtn.classList.remove("active");
        } else {
            this.unicodeBtn.classList.add("active");
            this.qwertyBtn.classList.remove("active");
        }
        
        this.updateLabels();
        this.updateOutputs();
        this.log("system", `Input mode changed to: ${mode === "qwerty" ? "Direct QWERTY Keyboard" : "macOS Sinhala Unicode"}`);
    }

    updateLabels() {
        const formGroup = this.inputEl.closest(".form-group");
        const label = formGroup.querySelector("label");
        const desc = formGroup.querySelector(".field-desc");
        
        if (this.mode === "qwerty") {
            label.innerText = "Type QWERTY Keystrokes Here (Direct Wijesekera Mapping):";
            desc.innerText = "Type using standard English keyboard (e.g. type 'l' for 'ක', then 'f' for 'ෙ'. Helper outputs 'fl')";
            this.inputEl.placeholder = "Type Wijesekera mapping on QWERTY (e.g., l + f = fl, o + q = ÿ)...";
        } else {
            label.innerText = "Type Sinhala Unicode Here:";
            desc.innerText = "Use standard macOS Sinhala Wijesekera or Phonetic keyboard layout";
            this.inputEl.placeholder = "Type Sinhala Unicode (e.g., ක + ෙ = කෙ, ද + ු = දු)...";
        }
    }

    /// Handles changes in the input textarea and simulates keystroke interception
    handleInput(event) {
        const text = this.inputEl.value;
        
        // Find if characters were added, deleted or text was cleared
        if (text === "") {
            this.log("clear", "Input cleared. Resetting buffer.");
            this.currentBuffer = "";
            this.previousInputText = "";
            this.updateOutputs();
            return;
        }

        const prevLen = this.previousInputText.length;
        const currLen = text.length;

        if (currLen < prevLen) {
            // Text was deleted (simulates Backspace press)
            const deletedCount = prevLen - currLen;
            this.log("backspace", `Physical Backspace intercepted. Deleted count: ${deletedCount}`);
            
            // Logically delete from buffer
            if (this.currentBuffer.length >= deletedCount) {
                const newBuffer = this.currentBuffer.substring(0, this.currentBuffer.length - deletedCount);
                this.updateBuffer(newBuffer);
            } else {
                this.currentBuffer = "";
                this.updateOutputs();
            }
        } else {
            // Text was added
            const addedText = text.substring(prevLen);
            
            if (this.mode === "qwerty") {
                // Check if control or whitespace character
                const isControlOrWhitespace = /[\s\t\r\n]/.test(addedText) || addedText.charCodeAt(0) < 32;
                if (!isControlOrWhitespace) {
                    this.log("type", `Intercepted QWERTY key: "${addedText}"`);
                    const newBuffer = this.currentBuffer + addedText;
                    this.updateBuffer(newBuffer);
                } else {
                    this.log("clear", "Whitespace typed. Clearing buffer.");
                    this.currentBuffer = "";
                    this.updateOutputs();
                }
            } else {
                // Unicode mode: Check if it is a Sinhala character or ZWJ
                if (this.isSinhalaUnicode(addedText)) {
                    this.log("type", `Intercepted Sinhala character: "${addedText}"`);
                    const newBuffer = this.currentBuffer + addedText;
                    this.updateBuffer(newBuffer);
                } else {
                    // Non-Sinhala character (word break)
                    this.log("clear", `Non-Sinhala key "${addedText}" typed. Clearing word buffer.`);
                    this.currentBuffer = "";
                    this.updateOutputs();
                }
            }
        }

        this.previousInputText = text;
    }

    /// Core real-time buffer diffing simulation
    updateBuffer(newBuffer) {
        const fmOld = this.mode === "qwerty" 
            ? FMAbhayaConverter.convertQwertyToFM(this.currentBuffer)
            : FMAbhayaConverter.convert(this.currentBuffer);
            
        const fmNew = this.mode === "qwerty"
            ? FMAbhayaConverter.convertQwertyToFM(newBuffer)
            : FMAbhayaConverter.convert(newBuffer);

        const prefixCount = this.commonPrefixCount(fmOld, fmNew);
        const suffixOldCount = fmOld.length - prefixCount;
        const suffixNew = fmNew.substring(prefixCount);

        // Simulated action descriptions for the log
        if (suffixOldCount > 0 || suffixNew.length > 0) {
            let actions = [];
            if (suffixOldCount > 0) {
                actions.push(`Backspace × ${suffixOldCount}`);
            }
            if (suffixNew.length > 0) {
                actions.push(`Type "${suffixNew}"`);
            }
            this.log("system", `Diff Action: Send [${actions.join(", ")}]`);
        }

        this.currentBuffer = newBuffer;
        this.updateOutputs();
    }

    /// Helper to find length of common prefix
    commonPrefixCount(s1, s2) {
        let count = 0;
        const minLen = Math.min(s1.length, s2.length);
        while (count < minLen && s1[count] === s2[count]) {
            count++;
        }
        return count;
    }

    /// Updates all UI elements and output preview boxes
    updateOutputs() {
        const fullAsciiOutput = this.mode === "qwerty"
            ? FMAbhayaConverter.convertQwertyToFM(this.inputEl.value)
            : FMAbhayaConverter.convert(this.inputEl.value);

        // Update State Cards
        this.bufferStateEl.innerText = this.currentBuffer ? `"${this.currentBuffer}"` : `""`;
        this.asciiStateEl.innerText = fullAsciiOutput ? `"${fullAsciiOutput}"` : `""`;

        // Update Previews
        this.unicodePreviewEl.innerText = this.mode === "qwerty" 
            ? "N/A (Typing raw ASCII QWERTY)"
            : this.inputEl.value;
        this.fmPreviewEl.innerText = fullAsciiOutput;
    }

    /// Checks if a string is inside the Sinhala Unicode block or is ZWJ
    isSinhalaUnicode(str) {
        if (!str) return false;
        for (let i = 0; i < str.length; i++) {
            const code = str.charCodeAt(i);
            if ((code >= 0x0D80 && code <= 0x0DFF) || code === 0x200D) {
                return true;
            }
        }
        return false;
    }

    /// Appends a new message to the Event Log
    log(type, msg) {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const entry = document.createElement("div");
        entry.className = `log-entry ${type}-entry`;

        const timeSpan = document.createElement("span");
        timeSpan.className = "log-time";
        timeSpan.innerText = `[${time}]`;

        const msgSpan = document.createElement("span");
        msgSpan.className = "log-msg";
        msgSpan.innerText = msg;

        entry.appendChild(timeSpan);
        entry.appendChild(msgSpan);
        
        this.activityLogEl.appendChild(entry);
        this.activityLogEl.scrollTop = this.activityLogEl.scrollHeight;
    }

    clearLogs() {
        this.activityLogEl.innerHTML = "";
        this.log("system", "Log cleared. Event tap listening...");
    }
}

// Instantiate the simulator on window load
window.addEventListener("DOMContentLoaded", () => {
    window.simulator = new Simulator();
});
