Git repo รวมสำหรับทุกข้อสอบ ของ dbms
ข้อ 1 จะอยู่ที่ dbms-technical-test
ข้อ 2 จะอยู่ที่ dbms-be-test-todo-list 
ข้อ 3 จะอยู่ที่ dbms-react-native-test

วิธี clone git submodule ตามคอมมานด้านล่าง 
```sh
git clone --recurse-submodules git@github.com:Skladkansaeng/dbms-test.git && cd dbms-test && git submodule foreach --recursive git checkout main
```
ตัว command จะทำการ clone ทุก submodule และ checkout ทุก repo ไปที่ main
