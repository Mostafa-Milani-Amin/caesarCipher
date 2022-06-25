const caesarCipher = (str, n) =>
    n < 0 || n > 26 || !Number.isInteger(n) || /[ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž]/.test(str) ? new Error("'n' must be an integer such that 0 ≤ n ≤ 26, and 'str' cannot contain accented letters.") : str.toLowerCase().replace(
        /[a-z]/gi,
        (c) =>
            "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"[
            "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz".indexOf(c) + n]
    );
