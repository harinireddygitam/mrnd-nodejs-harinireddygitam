
exports.Sum = function (num1, num2)
{
    return num1 + num2;
}

exports.SumOfArray = function (arrayOfNums)
{
  var  sum=0,i;
    for (i = 0; i < arrayOfNums.length; i++)
    {
        sum = sum + arrayOfNums[i];
    }
    return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function (arrayOfNums)
{
    var i, k,sum=0;
    var count = [];
    for (i = 0; i <10; i++)
    {
        count[i] = 0;
    }
    for (i = 0; i < arrayOfNums.length; i++)
    {
        k=arrayOfNums[i];
        if (count[k] == 0)
        {
            sum = sum + arrayOfNums[i];
            count[k]++;
        }
    }
    return sum;
}

exports.ReverseString = function (str)
{
    var strr = [];
    var i,j=0;
    for(i=(str.length-1);i>=0;i--)
    {
        strr[j] = str[i];
        j++;
    }
  strr = strr.join('');
    return strr;
}


exports.ReverseArrayOfStrings = function (arrayOfStrings)
{


}