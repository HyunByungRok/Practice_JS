//10.1 �迭�����
//������ Array�����ڿ� �迭 ���ͷ� ������ �ʱ�ȭ�� �ſ� �������̾���. �̸� �����ϰ��� ECMAScript6���� Array.of()�� Array.from()�޼��尡 �߰��Ǿ���.

//10.1.1 Array.of() �޼���
//Array�����ڷ� �迭�� ��������� ���޵� ������ Ÿ�԰� ������ ���� �ٸ��� �����Ѵ�.
print_array(new Array(2));
print_array(new Array("2"));
print_array(new Array(2, 1));
print_array(new Array(1,"2"));

function print_array(arr){
    console.log(arr.length);
    for(let e of arr) console.log(e);
    console.log("#############################");
}
//���Ͱ��� ���ڰ� ���� �Ѱ��� ���޵Ǹ� �迭�� length������Ƽ ���� �ǰ� ���ڿܿ� �����ͳ� 2���̻��� �����Ͱ� ���޵Ǹ� �迭�� ��Ұ� �ȴ�.
//������ Ÿ���� �׻� �� �� ������ �ſ� �����ϴ�. �׷��� ECMAScript6���� Array.of()�� ���ԵǾ���.
//Array.of()�� �����ڿ� �Ȱ��� �������� � ������ Ÿ���� ��� ������ �׻� ��ҷ� ���Ǿ� �迭�� �����Ѵ�.
print_array(Array.of(2));
print_array(Array.of("2"));
//�迭 ���ͷ��� ����Ҷ��� ���� ������ �ϴ� �� ������ �Լ��� �迭 �����ڸ� ���ڷ� ������ �ʿ䰡 ���� �� ����ϴ� ���� ����.


//10.1.2 Array.from() �޼���
//�迭�� �ƴ� ��ü�� �迭�� ��ȯ�ϴ� �޼��� - ����迭(ex arguments)�� �迭�� ����ϱ� ���ؼ��� �迭�� ��ȯ�ؾ� �Ѵ�.

function makeArray(arrayLike){
    //�����ڵ�
    var result = [];
    for(var i=0; i<arrayLike.length; i++) result.push(arrayLike[i]);
    return result;
    //����Ƽ�� �޼����� slice()�� ȣ���ϴ� ���
    return Array.prototype.slice.call(arrayLike);
    //Array.form() ��� - ���� slice�� ���� ���������� �ξ� �������̰� ����������. ���� �޼���� ���ʿ䵵 ����.
    return Array.from(arrayLike);
}

//���� ��ȯ - Array.from() �� �� ��° ���ڷ� �Լ��� �����Ͽ� ��ȯ �۾��� �� �� �ִ�.
function trans(){
    return Array.from(arguments, v => v**2);
}
console.log(trans(1,2,3));
//3��° ���ڷ� ��ü�� �����ϸ� �����Լ��� this ���� ��Ÿ����.
let helper = {
    add(v){
        return v+this.diff;
    }
};
let data = {diff:3};
function translate(){
    return Array.from(arguments, helper.add, data);
}
console.log(translate(1,2,3));

// iterator -> �迭��
function* name() {
    yield 1;
    yield 2;
    yield 3;
}
let a = name();
console.log(Array.from(a, v => v**2));

//10.2 �迭�� ���ο� �޼���
//find(), findIndex(), fill(), copyWithin()

//10.2.1 find()�� findIndex()�޼��� - Ư�����ǿ� �´� �迭 ��Ҹ� ã���� ����
//������ Ư������ ã�� indexOf�� lastIndexOf�� �ƽ������� �ذ�
let numbers = [22,33,11,44,55];
console.log(numbers.find(v => v>32));
console.log(numbers.findIndex(v => v>32));

//10.2.2 fill()
//Ư�� ������ �迭�� ä���. �ε����� ������ �� �ִ�. �Ʒ��� �ʱ� 0���� �ʱ�ȭ�Ǿ��ִٰ� ����
Array().fill(1); //(value) [1,1,1,1,1,1]
Array().fill(1,2); //(value, startIndex) [0,0,1,1,1,1]
Array().fill(1,1,3); //(value, startIndex, endIndex) [0, 1, 1, 0, 0]

//10.2.3 copyWithin()
//�迭���� ��Ұ��� �����ϴ� �޼���
//(start, copy) start�� copy���� �����ϴ� ���� �����س���
//(start, copy, stop) start�� copy���� �����ϴ� ���� �����ϴµ� stop���� ���� �ڱ�� ����
    