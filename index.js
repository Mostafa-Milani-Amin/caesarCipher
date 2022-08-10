parseInt(n) < 0 || parseInt(n) > 26 || !Number.isInteger(parseInt(n)) || /[ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž]/.test(str) ? new Error("'n' must be an integer such that 0 ≤ n ≤ 26, and 'str' cannot contain accented letters.") : str.toLowerCase().replace(
        /[a-z]/gi,
        (c) =>
            "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"[
            "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz".indexOf(c) + parseInt(n)]
    );

export default caesarCipher;
