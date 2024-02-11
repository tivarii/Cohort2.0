#include<vector>
#include<algorithm>
#include<iostream>
#include<math.h>
using namespace std;



int maximumLength(vector<int>& nums) {
        vector<double> temp;
        sort(nums.begin(),nums.end());
        for(auto x: nums){
            temp.push_back(log2(x));
        }
        int ans=0;
        int t=1;
        int te=0;
        for(int i=0;i<temp.size()-1;i++){
            while(i<temp.size() && temp[i]<t){
                i++;
            }
            if(temp[i]==t ){
                te++;
                i++;
                if(i>=temp.size()){
                    if(ans<te)
                        ans=te;
                    return ans;
                }
                else if(temp[i]==t){
                    te++;
                }else{
                    if(ans<te) ans=te;
                    te=0;
                    t*=2;
                }
            }
            else{
                if(ans<te){
                    ans=te;
                }
                te=0;
                t*=2;
            }  
        }
        return (ans==0)?1:ans;
    }

int main(){
    vector<int> temp={5,4,1,2,2};
    cout<<maximumLength(temp);
}