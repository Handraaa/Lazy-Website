#include <iostream>
#include <fstream>
using namespace std;


int main()
{   
    

	/*int** tab2dim = new int* [4];
	for (int i = 0; i < 4; i++)
	{
		tab2dim[i] = new int[3];
	}


	if (plik_out.good())
	{

		plik_out << "Przykladowe zdanie z wyrazami \n";

		for (int i = 0; i < 12; i++)
		{
			plik_out << i + 1 << " " << i + 2 << " " << i + 3 << "\n";

			i += 2;
		}


	}
	else
	{
		cout << "blad";
	}
	
	plik_out.close();

	for (int i = 0; i < 4; i++)
	{
		delete[] tab2dim[i];
	}*/


	int** tab2dim = new int* [4];
	for (int i = 0; i < 4; i++)
	{
		tab2dim[i] = new int[3];
	}

	ofstream plik_out;
	plik_out.open("plik1.txt");

	if (plik_out.good()) {
		
		for (int i = 0; i < 12; i++)
		{
			plik_out << i + 1 << " " << i + 2 << " " << i + 3 << "\n";
			i += 2;
		}
	}
	else
	{
		cout << "blad";
	}
	plik_out.close();

	ifstream plik_in;
	plik_in.open("plik1.txt");
	


	if (plik_in.good())
	{	
		int suma1 = 0;
		int sumatr = 0;


		for (int i = 0; i < 4; i++)
		{
			for (int j = 0; j < 3; j++)
			{
				plik_in >> tab2dim[i][j];
				cout << tab2dim[i][j] << " ";
			}
			cout << "\n";
		}
		for (int i = 0; i < 4; i++) {
			for (int j = 0; j < 3; j++) {
				if (i == j) {
					
					suma1 += tab2dim[i][j];
					
				}

			}	
		}
		cout << "Suma przekatnej: " << suma1 << "\n";
		
		for (int i = 0; i < 3; i++)
		{
			for (int j = 0; j < 3; j++)
			{
				if (i <= j)
				{
					sumatr += tab2dim[i][j];
					
				}

			}

		}

		
		cout << "Suma gornego trojkata: " << sumatr;
	}
	
}
