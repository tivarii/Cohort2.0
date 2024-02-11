#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;
bool canSortArray(vector<int>& nums) {
        for(int i=0;i<nums.size()-1;i++){
            int temp=nums[i];
            int mn=min_element(nums.begin()+i+1,nums.end())-nums.begin();
            cout<<"temp="<<temp<<", mn="<<nums[mn];
            if(mn<temp){
                int sb1=0,sb2=0;
                int t1=temp,t2=nums[mn];
                while(t1>0 && t2>0){
                    if((t1&&1)==1) sb1++;
                    if((t2&&1)==1) sb2++;
                    t1=t1>>1;
                    t2=t2>>1;
                }
                while(t1>0 ){
                    if((t1&&1)==1) sb1++;
                    t1=t1>>1;
                }
                while(t2>0){
                    if((t2&&1)==1) sb2++;
                    t2=t2>>1;
                }
                cout<<"sb1="<<sb1<<", sb2="<<sb2;
                if(sb1==sb2){
                    nums[i]=nums[mn];
                    nums[mn]=temp;
                }
                else{
                    return false;
                }
            }
        }
        return true;
    }

int main(){
vector<int> v1={8,4,2,30,15};
}