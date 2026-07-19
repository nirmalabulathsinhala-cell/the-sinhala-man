import Foundation

func assertEqual(_ actual: String, _ expected: String, _ message: String) {
    if actual == expected {
        print("✅ PASS: \(message)")
    } else {
        print("❌ FAIL: \(message) - Expected '\(expected)', got '\(actual)'")
        exit(1)
    }
}

print("Running FMAbhayaConverter tests...")

// Test Basic Vowel Reorderings
assertEqual(FMAbhayaConverter.convert("කෙ"), "fl", "ke -> fl")
assertEqual(FMAbhayaConverter.convert("කො"), "fld", "ko -> fld")

// Test Conjuncts and Complex Reorderings
assertEqual(FMAbhayaConverter.convert("ක්‍රෙ"), "fl%", "kre -> fl%")

// Test Ligatures (Papili, Ispili, Al-lakuna)
assertEqual(FMAbhayaConverter.convert("දු"), "ÿ", "du -> ÿ")
assertEqual(FMAbhayaConverter.convert("දූ"), "¥", "duu -> ¥")
assertEqual(FMAbhayaConverter.convert("කු"), "l=", "ku -> l=")
assertEqual(FMAbhayaConverter.convert("කූ"), "l+", "kuu -> l+")
assertEqual(FMAbhayaConverter.convert("රැ"), "/", "rae -> /")
assertEqual(FMAbhayaConverter.convert("රෑ"), "?", "raee -> ?")
assertEqual(FMAbhayaConverter.convert("බ්"), "í", "b_al -> í")

// --- Direct QWERTY translation tests ---
print("Running convertQwertyToFM tests...")
assertEqual(FMAbhayaConverter.convertQwertyToFM("lf"), "fl", "QWERTY: l + f -> fl (කෙ)")
assertEqual(FMAbhayaConverter.convertQwertyToFM("lff"), "ffl", "QWERTY: l + f + f -> ffl (කෛ)")
assertEqual(FMAbhayaConverter.convertQwertyToFM("lfd"), "fld", "QWERTY: l + f + d -> fld (කො)")
assertEqual(FMAbhayaConverter.convertQwertyToFM("lfda"), "flda", "QWERTY: l + f + d + a -> flda (කෝ)")
assertEqual(FMAbhayaConverter.convertQwertyToFM("oq"), "ÿ", "QWERTY: o + q -> ÿ (දු)")
assertEqual(FMAbhayaConverter.convertQwertyToFM("oQ"), "¥", "QWERTY: o + Q -> ¥ (දූ)")
assertEqual(FMAbhayaConverter.convertQwertyToFM("lq"), "l=", "QWERTY: l + q -> l= (කු)")
assertEqual(FMAbhayaConverter.convertQwertyToFM("lQ"), "l+", "QWERTY: l + Q -> l+ (කූ)")
assertEqual(FMAbhayaConverter.convertQwertyToFM("l%f"), "fl%", "QWERTY: l + % + f -> fl% (ක්‍රෙ)")

// New QWERTY ළ and ළු tests (macOS Wijesekera layout support)
assertEqual(FMAbhayaConverter.convertQwertyToFM("L"), "<", "QWERTY: L -> < (ළ)")
assertEqual(FMAbhayaConverter.convertQwertyToFM("LQ"), "¿", "QWERTY: LQ -> ¿ (ළු)")
assertEqual(FMAbhayaConverter.convertQwertyToFM("Lq"), "¿", "QWERTY: Lq -> ¿ (ළු)")
assertEqual(FMAbhayaConverter.convertQwertyToFM("Ls"), "<s", "QWERTY: Ls -> <s (ළි)")
assertEqual(FMAbhayaConverter.convertQwertyToFM("LS"), "<S", "QWERTY: LS -> <S (ළී)")
assertEqual(FMAbhayaConverter.convertQwertyToFM("La"), "<a", "QWERTY: La -> <a (ළ්)")

// Test "මෙතූප හිමසල්" (y + s should not remove හ)
assertEqual(FMAbhayaConverter.convert("මෙතූප හිමසල්"), "fu;+m ysui,a", "Unicode: මෙතූප හිමසල් -> fu;+m ysui,a")
assertEqual(FMAbhayaConverter.convertQwertyToFM("uf;Qm ysui,a"), "fu;+m ysui,a", "QWERTY: uf;Qm ysui,a -> fu;+m ysui,a")

print("🎉 All converter tests passed successfully!")
