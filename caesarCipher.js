const caesarCipher = (str, n) =>
    n < 0 || n > 26 || !Number.isInteger(n) ? new Error("'n' must be an integer such that 0 ≤ n ≤ 26.") : str.toLowerCase().replace(
        /[a-z]/gi,
        (c) =>
            "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"[
            "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz".indexOf(c) + n]
    );